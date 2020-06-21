package com.group3.project2.services;

import java.util.List;
import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import com.amazonaws.auth.AWSCredentialsProvider;
import com.amazonaws.auth.AWSStaticCredentialsProvider;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.services.sns.AmazonSNS;
import com.amazonaws.services.sns.AmazonSNSClientBuilder;
import com.amazonaws.services.sns.model.CreateTopicRequest;
import com.amazonaws.services.sns.model.CreateTopicResult;
import com.amazonaws.services.sns.model.PublishRequest;
import com.amazonaws.services.sns.model.PublishResult;
import com.amazonaws.services.sns.model.SubscribeRequest;
import com.group3.project2.models.Patient;
import com.group3.project2.repositories.PatientRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Service
public class NotificationService {
  
  @Value("${aws.accessKey}")
  private String awsAccessKey;

  @Value("${aws.secretKey}")
  private String awsSecretKey;

  @Value("${aws.region}")
  private String awsRegion;
  
  @Autowired
  PatientRepository patientRepository;
  
  private AmazonSNS amazonSNS;
  
  private static final Logger logger = LoggerFactory.getLogger(NotificationService.class);
  
  @PostConstruct
  private void postConstructor() {
    
      

      AWSCredentialsProvider awsCredentialsProvider = new AWSStaticCredentialsProvider(
              new BasicAWSCredentials(awsAccessKey, awsSecretKey)
      );

      this.amazonSNS = AmazonSNSClientBuilder.standard()
              .withCredentials(awsCredentialsProvider)
              .withRegion(awsRegion)
              .build();
      
  }
  //Creates a new topic. topicName should be created from a combination of patient fields for uniqueness
  //Returns one of the needed parameters for setSubscriber, and it also is a field for Patient. 
  public String newTopic(String topicName) {
    
    //Create a request for a new topic.
    final CreateTopicRequest createTopicRequest = new CreateTopicRequest(topicName);
    //Response is needed to get the new topic's identifier. This also sends the above request.
    final CreateTopicResult createTopicResponse = amazonSNS.createTopic(createTopicRequest);
    //Return the topic identifier
    return createTopicResponse.getTopicArn();
  }
  //This should be called in conjunction with newTopic
  public void setSubscriber(String arn, String email) {
    //Second parameter in new Request defines the type. Can be others such as HTTP, SMS, etc
    final SubscribeRequest subscribeRequest = new SubscribeRequest(arn, "email", email);
    amazonSNS.subscribe(subscribeRequest);
  }
  
  //This will query the Patient database for a list of Patients and their lastRecords to get their dates, and compare them to current date. 
  //If over a certain margin, call publishNotification for that specific Patient. 
  //It will definitely not be efficient in a large data-set.
  @Scheduled(cron="0 0 * * * *")
  public void dbPolling() {
    logger.info("Beginning DB polling for notifications");
    List<Patient> users= patientRepository.getUsersWithARNAndNoRecentAppointments();
    for (Patient user: users) {
      logger.info("DB POLLING: Sending new notification to " + user.getARN());
      publishNotification(user.getARN(), "You have not had an appointment with us in at least 6 months. Please schedule a new one.", "Please Schedule an Appointment");
    }
  }
  
  //Publish a new message to a TOPIC. Will only be received if a user is subscribed to a topic created for them, AND ITS CONFIRMED
  public PublishResult publishNotification(String ARN, String message, String subject) {
    PublishRequest request = new PublishRequest();
    request.setMessage(message);
    request.setSubject(subject);
    request.setTopicArn(ARN);
    PublishResult result = this.amazonSNS.publish(request);
    return result;
  }
}
