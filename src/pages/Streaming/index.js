import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
  Button,
} from "react-native";

import { NodeCameraView } from "react-native-nodemediaclient";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ],
      {
        title: "Cool Photo App Camera And Microphone Permission",
        message:
          "Cool Photo App needs access to your camera " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const Streaming = () => {
  const [state, setState] = useState({
    publishBtnTitle: "Começar a live",
    isPublish: false,
  });

  const vbRef = useRef(null);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      {/** <SafeAreaView>  */}
      <NodeCameraView
        style={{ height: "95.6%" }}
        ref={(vb) => {
          vbRef.current = vb;
        }}
        outputUrl={
          "rtmp://live.mux.com/app/232620e9-6c84-10b3-5dfa-071b1083a1ff"
        }
        camera={{ cameraId: 1, cameraFrontMirror: true }}
        audio={{ bitrate: 32000, profile: 1, samplerate: 44100 }}
        video={{
          preset: 12,
          bitrate: 400000,
          profile: 1,
          fps: 15,
          videoFrontMirror: false,
        }}
        autopreview={true}
      />

      {/**<Button title="request permissions" onPress={requestCameraPermission} /> */}
      <Button
        onPress={() => {
          if (state.isPublish) {
            setState({
              publishBtnTitle: "Começar a live",
              isPublish: false,
            });
            vbRef.current.stop();
          } else {
            setState({ publishBtnTitle: "Parar a live", isPublish: true });
            vbRef.current.start();
          }
        }}
        title={state.publishBtnTitle}
        color="#f57d27"
      />
      {/** </SafeAreaView>  */}
    </>
  );
};

export default Streaming;
