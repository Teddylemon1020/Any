#include <Arduino.h>
#include <Firebase_ESP_Client.h>
#include "DHT.h"
#include <Adafruit_Sensor.h>

#define DHTPIN 10
#define DHTTYPE DHT11

DHT dht(DHTPIN, DHTTYPE);


// Insert your network credentials
#define WIFI_SSID "SO2"
#define WIFI_PASSWORD "12345678"

// Insert Firebase project API Key
#define API_KEY "AIzaSyDIi6RATjXOxB5lHs5-__If9WAMxzZ8aFs"

// Insert RTDB URL
#define DATABASE_URL "https://ardesp32-4012b-default-rtdb.asia-southeast1.firebasedatabase.app"

// Define Firebase Data object
FirebaseData fobd;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool signupOK = false;

void setup() {
  Serial.begin(115200);

  // Connect to WiFi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();

   dht.begin();  //TO START THE SENSOR

  // Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Firebase authentication successful");
    signupOK = true;
  }
  else {
    Serial.printf("Firebase authentication failed: %s\n", config.signer.signupError.message.c_str());
  }
}



void loop() {
  delay(2000);

  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 15000 || sendDataPrevMillis == 0)) {
    sendDataPrevMillis = millis();

    // Send humidity and temperature data to Firebase
    if (Firebase.RTDB.setFloat(&fobd, "Humidity", humidity) &&
        Firebase.RTDB.setFloat(&fobd, "Temperature", temperature)) {
      Serial.println("Data sent to Firebase successfully");
      Serial.print("Humidity: ");
      Serial.print(humidity);
      Serial.println(" %");
      Serial.print("Temperature: ");
      Serial.print(temperature);
      Serial.println(" °C");
    } else {
      Serial.print("Failed to send data to Firebase: ");
      Serial.print("Reason: " + fobd.errorReason());
      
    }
  }
}
     
     
