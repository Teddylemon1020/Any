#include <Servo.h>

// Define the servos
Servo leftHip;
Servo rightHip;
Servo leftAnkle;
Servo rightAnkle;

// Define the positions for walking
int leftHipForward = 90;
int leftHipBackward = 120;
int rightHipForward = 90;
int rightHipBackward = 60;
int leftAnkleUp = 90;
int leftAnkleDown = 60;
int rightAnkleUp = 90;
int rightAnkleDown = 120;

void setup() {
  // Attach the servos to their pins
  leftHip.attach(9);
  rightHip.attach(10);
  leftAnkle.attach(11);
  rightAnkle.attach(12);

  // Initialize the robot in a standing position
  leftHip.write(leftHipForward);
  rightHip.write(rightHipForward);
  leftAnkle.write(leftAnkleUp);
  rightAnkle.write(rightAnkleUp);

  delay(1000); // Wait for the robot to stabilize
}

void loop() {
  // Step 1: Lift left leg and move forward
  leftAnkle.write(leftAnkleDown);
  delay(500);
  leftHip.write(leftHipBackward);
  delay(500);
  leftAnkle.write(leftAnkleUp);
  delay(500);

  // Step 2: Lift right leg and move forward
  rightAnkle.write(rightAnkleDown);
  delay(500);
  rightHip.write(rightHipBackward);
  delay(500);
  rightAnkle.write(rightAnkleUp);
  delay(500);

  // Step 3: Return legs to original position
  leftHip.write(leftHipForward);
  rightHip.write(rightHipForward);
  delay(500);
}
