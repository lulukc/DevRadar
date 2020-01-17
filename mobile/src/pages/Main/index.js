import React, { useEffect, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { ActivityIndicator } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

import api from "../../services/api";

import {
  AvatarImage,
  DevName,
  DevBio,
  DevTechs,
  CalloutView,
  SearchForm,
  SearchInput,
  SearchButton
} from "./styles";

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState("");

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02
        });
      }
    }
    loadInitialPosition();
  }, []);

  async function loadDevs() {
    const { latitude, longitude } = currentRegion;

    const response = await api.get("search", {
      params: {
        latitude,
        longitude,
        techs
      }
    });
    setDevs(response.data);
  }
  function handleRegionChange(region) {
    setCurrentRegion(region);
  }
  if (!currentRegion) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
        style={{ flex: 1 }}
      >
        {devs.map(dev => (
          <Marker
            key={dev._id}
            coordinate={{
              latitude: dev.location.coordinates[1],
              longitude: dev.location.coordinates[0]
            }}
          >
            <AvatarImage
              source={{
                uri: dev.avatar_url
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate("Profile", {
                  github_username: dev.github_username
                });
              }}
            >
              <CalloutView>
                <DevName>{dev.name}</DevName>
                <DevBio>{dev.bio}</DevBio>
                <DevTechs>{dev.techs.join(", ")}</DevTechs>
              </CalloutView>
            </Callout>
          </Marker>
        ))}
      </MapView>
      <SearchForm>
        <SearchInput
          placeholder="Buscar devs por techs..."
          autoCapitalize="words"
          returnKeyType="send"
          autoCorrect={false}
          onChangeText={setTechs}
          value={techs}
        />
        <SearchButton onPress={loadDevs}>
          <MaterialIcons name="my-location" size={20} color="#fff" />
        </SearchButton>
      </SearchForm>
    </>
  );
}
