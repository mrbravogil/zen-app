FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY . /app

RUN ./mvnw clean package -DskipTests && cp target/*.jar app.jar

EXPOSE 8080

CMD ["java", "-jar", "app.jar"]
