import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MapPin, Target, Eye, Award, Building, CheckCircle, Leaf, Zap, Users } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Hero Image */}
      <View style={styles.heroContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photo-1590644365437-2573c4c3b914?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.heroImage}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['transparent', 'rgba(30, 64, 175, 0.95)']}
          style={styles.heroGradient}
        >
          <Text style={styles.heroTitle}>About Versatile Star</Text>
          <Text style={styles.heroSubtitle}>Engineering trust, project after project.</Text>
        </LinearGradient>
      </View>

      {/* Company Header */}
      <View style={styles.headerSection}>
        <View style={styles.headerContent}>
          <View style={styles.companyBadge}>
            <Building size={24} color="#1e40af" />
          </View>
          <Text style={styles.companyName}>Versatile Star Private Limited</Text>
          <View style={styles.locationRow}>
            <MapPin size={16} color="#1e40af" />
            <Text style={styles.locationText}>Haridwar, Uttarakhand, India</Text>
          </View>
        </View>
      </View>

      {/* Core Focus */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>Core Focus Areas</Text>
        <View style={styles.focusGrid}>
          <View style={styles.focusCard}>
            <View style={[styles.focusIcon, { backgroundColor: '#dbeafe' }]}>
              <Building size={24} color="#1e40af" />
            </View>
            <Text style={styles.focusTitle}>Civil Works</Text>
          </View>
          <View style={styles.focusCard}>
            <View style={[styles.focusIcon, { backgroundColor: '#dcfce7' }]}>
              <Leaf size={24} color="#15803d" />
            </View>
            <Text style={styles.focusTitle}>Hydro-Mechanical</Text>
          </View>
          <View style={styles.focusCard}>
            <View style={[styles.focusIcon, { backgroundColor: '#fef3c7' }]}>
              <Zap size={24} color="#b45309" />
            </View>
            <Text style={styles.focusTitle}>Power Sector</Text>
          </View>
          <View style={styles.focusCard}>
            <View style={[styles.focusIcon, { backgroundColor: '#f1f5f9' }]}>
              <Users size={24} color="#475569" />
            </View>
            <Text style={styles.focusTitle}>Manpower</Text>
          </View>
        </View>
      </View>

      {/* Vision */}
      <View style={styles.visionSection}>
        <View style={styles.visionCard}>
          <View style={styles.visionIconContainer}>
            <Eye size={32} color="#ffffff" />
          </View>
          <Text style={styles.visionTitle}>Our Vision</Text>
          <Text style={styles.visionText}>
            Transforming waste material into reusable resources to go green through sustainable practices and technological advancement.
          </Text>
        </View>
      </View>

      {/* Mission */}
      <View style={styles.missionSection}>
        <View style={styles.missionCard}>
          <View style={styles.missionIconContainer}>
            <Target size={32} color="#1e40af" />
          </View>
          <Text style={styles.missionTitle}>Our Mission</Text>
          <Text style={styles.missionText}>
            Development through engineering works and redefining waste management through innovative recycling and segregation.
          </Text>
        </View>
      </View>

      {/* Certifications */}
      <View style={styles.certificationsSection}>
        <Text style={styles.sectionTitle}>Certifications & Registrations</Text>

        <View style={styles.certGroup}>
          <View style={styles.certIconRow}>
            <Award size={24} color="#1e40af" />
            <Text style={styles.certGroupTitle}>Government Certifications</Text>
          </View>
          <View style={styles.certList}>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>MSME Registered</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>Start-up India Registered</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>ZED Certified</Text>
            </View>
          </View>
        </View>

        <View style={styles.certGroup}>
          <View style={styles.certIconRow}>
            <Building size={24} color="#1e40af" />
            <Text style={styles.certGroupTitle}>Vendor Empanelments</Text>
          </View>
          <View style={styles.certList}>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>UJVN Ltd.</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>NHPC Ltd.</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>SJVN Ltd.</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>PSPCL</Text>
            </View>
          </View>
        </View>

        <View style={styles.certGroup}>
          <View style={styles.certIconRow}>
            <MapPin size={24} color="#1e40af" />
            <Text style={styles.certGroupTitle}>Government Registrations</Text>
          </View>
          <View style={styles.certList}>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>PWD Registered</Text>
            </View>
            <View style={styles.certItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.certText}>Municipal Body Partnerships</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Service Categories */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Service Categories</Text>
        <View style={styles.serviceTags}>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Civil Works</Text>
          </View>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Hydro Mechanical</Text>
          </View>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Power Sector</Text>
          </View>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Waste Management</Text>
          </View>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Manpower</Text>
          </View>
          <View style={styles.serviceTag}>
            <Text style={styles.serviceTagText}>Equipment AMC</Text>
          </View>
        </View>
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
    height: 240,
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
  heroTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 26,
    color: '#ffffff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#e0e7ff',
  },
  headerSection: {
    padding: 24,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  headerContent: {
    alignItems: 'center',
  },
  companyBadge: {
    width: 56,
    height: 56,
    backgroundColor: '#dbeafe',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  companyName: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#1e40af',
  },
  section: {
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  sectionLabel: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#64748b',
    marginBottom: 16,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  focusGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  focusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    width: (width - 64) / 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  focusIcon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  focusTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 13,
    color: '#1e293b',
    flex: 1,
  },
  visionSection: {
    padding: 20,
  },
  visionCard: {
    backgroundColor: '#1e40af',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  visionIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  visionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginBottom: 12,
  },
  visionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#dbeafe',
    textAlign: 'center',
    lineHeight: 22,
  },
  missionSection: {
    padding: 20,
    paddingTop: 0,
  },
  missionCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  missionIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: '#dbeafe',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  missionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e40af',
    marginBottom: 12,
  },
  missionText: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#475569',
    textAlign: 'center',
    lineHeight: 22,
  },
  certificationsSection: {
    backgroundColor: '#f8fafc',
    paddingTop: 24,
    paddingBottom: 24,
  },
  certGroup: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  certIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  certGroupTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
  },
  certList: {
    gap: 10,
  },
  certItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  certText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#1e293b',
  },
  servicesSection: {
    paddingTop: 20,
  },
  serviceTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 10,
  },
  serviceTag: {
    backgroundColor: '#1e40af',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
  },
  serviceTagText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#ffffff',
  },
  bottomPadding: {
    height: 30,
  },
});
