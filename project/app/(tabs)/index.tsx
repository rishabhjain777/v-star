import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';
import { ArrowRight, MapPin, Award, Leaf, Settings } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Section */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photo-5878288/pexels-photo-5878288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'rgba(30, 64, 175, 0.9)']}
          style={styles.heroGradient}
        >
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Engineering trust, project after project.</Text>
            <Text style={styles.heroSubtitle}>
              Delivering excellence in civil & hydro-mechanical works across India
            </Text>
            <Link href="/about" asChild>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaText}>Learn More</Text>
                <ArrowRight size={20} color="#1e40af" />
              </TouchableOpacity>
            </Link>
          </View>
        </LinearGradient>
      </View>

      {/* Location Badge */}
      <View style={styles.locationContainer}>
        <MapPin size={16} color="#1e40af" />
        <Text style={styles.locationText}>Headquartered in Haridwar, Uttarakhand</Text>
      </View>

      {/* Features Grid */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>Our Expertise</Text>
        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#dbeafe' }]}>
              <Settings size={28} color="#1e40af" />
            </View>
            <Text style={styles.featureTitle}>Civil Works</Text>
            <Text style={styles.featureDesc}>Comprehensive civil engineering solutions</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#dcfce7' }]}>
              <Leaf size={28} color="#15803d" />
            </View>
            <Text style={styles.featureTitle}>Waste Management</Text>
            <Text style={styles.featureDesc}>Sustainable recycling & segregation</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#fef3c7' }]}>
              <Award size={28} color="#b45309" />
            </View>
            <Text style={styles.featureTitle}>Power Sector</Text>
            <Text style={styles.featureDesc}>Expert equipment & maintenance</Text>
          </View>

          <View style={styles.featureCard}>
            <View style={[styles.featureIcon, { backgroundColor: '#f3e8ff' }]}>
              <MapPin size={28} color="#7c3aed" />
            </View>
            <Text style={styles.featureTitle}>Manpower</Text>
            <Text style={styles.featureDesc}>Skilled workforce deployment</Text>
          </View>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.certSection}>
        <Text style={styles.sectionTitle}>Certified & Registered</Text>
        <View style={styles.certGrid}>
          <View style={styles.certBadge}>
            <Text style={styles.certText}>MSME</Text>
          </View>
          <View style={styles.certBadge}>
            <Text style={styles.certText}>Start-up India</Text>
          </View>
          <View style={styles.certBadge}>
            <Text style={styles.certText}>ZED Certified</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.actionsSection}>
        <Link href="/contact" asChild>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Get a Quote</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/services" asChild>
          <TouchableOpacity style={[styles.actionButton, styles.secondaryButton]}>
            <Text style={[styles.actionText, styles.secondaryText]}>View Services</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroContainer: {
    height: 300,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  heroGradient: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 24,
  },
  heroContent: {
    marginBottom: 20,
  },
  heroTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 12,
    lineHeight: 34,
  },
  heroSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#e0e7ff',
    marginBottom: 20,
    lineHeight: 22,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 8,
    alignSelf: 'flex-start',
    gap: 8,
  },
  ctaText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#1e40af',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    backgroundColor: '#f8fafc',
    gap: 8,
  },
  locationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#1e40af',
  },
  featuresSection: {
    padding: 20,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 22,
    color: '#1e293b',
    marginBottom: 20,
    textAlign: 'center',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  featureCard: {
    width: (width - 52) / 2,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  featureIcon: {
    width: 56,
    height: 56,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 6,
  },
  featureDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
  certSection: {
    backgroundColor: '#f8fafc',
    padding: 24,
  },
  certGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 12,
  },
  certBadge: {
    backgroundColor: '#1e40af',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  certText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#ffffff',
  },
  actionsSection: {
    padding: 20,
    gap: 12,
  },
  actionButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  actionText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#ffffff',
  },
  secondaryText: {
    color: '#1e40af',
  },
  bottomPadding: {
    height: 20,
  },
});
