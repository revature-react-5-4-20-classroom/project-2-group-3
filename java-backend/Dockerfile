FROM openjdk:8-jdk-alpine
ARG JAR_FILE
COPY $JAR_FILE appcat.jar
CMD ["java","-jar","appcat.jar"]
EXPOSE 1235/tcp
