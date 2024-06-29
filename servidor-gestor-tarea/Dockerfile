FROM openjdk:17-jdk-slim
ARG JAR_FILE=target/tareas-0.0.1.jar
COPY ${JAR_FILE} app_servidor-gestor.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app_servidor-gestor.jar"]
