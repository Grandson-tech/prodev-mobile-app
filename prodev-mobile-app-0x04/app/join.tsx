import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { styles } from '@/styles/_joinstyle';
import { GOOGLELOGO, FACEBOOKLOGO, HEROLOGOGREEN } from '@/constants';

export default function JoinScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <ScrollView style={styles.container}>
      <View style={styles.iconsection}>
        <Link href="/" asChild>
          <TouchableOpacity>
            <Text>← Back</Text>
          </TouchableOpacity>
        </Link>
        <Image source={HEROLOGOGREEN} style={{ width: 50, height: 50 }} />
        <View />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join ProDev</Text>
        <Text style={styles.subText}>Create your account to get started</Text>
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.formLabel}>Email</Text>
        <TextInput
          style={styles.formControl}
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.formLabel}>Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <Text style={styles.formLabel}>Confirm Password</Text>
        <View style={styles.formPasswordControl}>
          <TextInput
            style={styles.passwordControl}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
          <Image source={GOOGLELOGO} style={{ width: 20, height: 20 }} />
          <Text style={[styles.secondaryButtonText, { color: '#000' }]}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.secondaryButton, { borderColor: '#E9E9E9' }]}>
          <Image source={FACEBOOKLOGO} style={{ width: 20, height: 20 }} />
          <Text style={[styles.secondaryButtonText, { color: '#000' }]}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <Link href="/signin" asChild>
          <TouchableOpacity>
            <Text style={styles.signupSubTitleText}>Sign In</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}
