import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_mainstyle';
import { BACKGROUNDIMAGE, HEROLOGO } from '@/constants';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image source={HEROLOGO} style={{ width: 100, height: 100 }} />
        </View>
        
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Welcome to ProDev</Text>
          <View style={styles.titleSubTextContainer}>
            <Text style={styles.titleSubText}>
              Your journey to becoming a professional developer starts here
            </Text>
          </View>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/(home)" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Get Started</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>

        <View style={styles.buttonGroupSubText}>
          <Text style={styles.titleSubText}>
            Already have an account? Sign in to continue
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}
