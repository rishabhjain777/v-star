import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Users, Award, Target, Briefcase } from 'lucide-react-native';

const teamCategories = [
  {
    title: 'Management',
    icon: Users,
    count: '5+',
    description: 'Experienced leadership team',
  },
  {
    title: 'Engineers',
    icon: Target,
    count: '20+',
    description: 'Qualified technical professionals',
  },
  {
    title: 'Project Managers',
    icon: Briefcase,
    count: '10+',
    description: 'Skilled project supervisors',
  },
  {
    title: 'Field Workers',
    icon: Award,
    count: '100+',
    description: 'Trained workforce',
  },
];

export default function TeamScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Users size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>Our Team</Text>
        <Text style={styles.headerSubtitle}>
          Skilled professionals driving excellence
        </Text>
      </View>

      {/* Team Categories */}
      <View style={styles.teamGrid}>
        {teamCategories.map((category, index) => (
          <View key={index} style={styles.teamCard}>
            <View style={styles.teamIcon}>
              <category.icon size={28} color="#1e40af" />
            </View>
            <Text style={styles.teamCount}>{category.count}</Text>
            <Text style={styles.teamTitle}>{category.title}</Text>
            <Text style={styles.teamDesc}>{category.description}</Text>
          </View>
        ))}
      </View>

      {/* Values Section */}
      <View style={styles.valuesSection}>
        <Text style={styles.sectionTitle}>Our Values</Text>
        <View style={styles.valuesGrid}>
          <View style={styles.valueCard}>
            <View style={[styles.valueIcon, { backgroundColor: '#dcfce7' }]}>
              <Award size={24} color="#15803d" />
            </View>
            <Text style={styles.valueTitle}>Excellence</Text>
            <Text style={styles.valueText}>
              Committed to delivering exceptional quality in every project.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <View style={[styles.valueIcon, { backgroundColor: '#dbeafe' }]}>
              <Target size={24} color="#1e40af" />
            </View>
            <Text style={styles.valueTitle}>Integrity</Text>
            <Text style={styles.valueText}>
              Transparent and ethical business practices.
            </Text>
          </View>
          <View style={styles.valueCard}>
            <View style={[styles.valueIcon, { backgroundColor: '#fef3c7' }]}>
              <Briefcase size={24} color="#d97706" />
            </View>
            <Text style={styles.valueTitle}>Innovation</Text>
            <Text style={styles.valueText}>
              Embracing new technologies and methods.
            </Text>
          </View>
        </View>
      </View>

      {/* Image Section */}
      <View style={styles.imageSection}>
        <Image
          source={{ uri: 'https://images.pexels.com/photo-3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
          style={styles.teamImage}
          resizeMode="cover"
        />
        <View style={styles.imageOverlay}>
          <Text style={styles.imageQuote}>
            "Our strength lies in our dedicated team of professionals"
          </Text>
        </View>
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#6366f1',
    padding: 24,
    alignItems: 'center',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerIcon: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#ffffff',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 15,
    color: '#e0e7ff',
    textAlign: 'center',
  },
  teamGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    gap: 12,
    justifyContent: 'space-between',
  },
  teamCard: {
    width: '48%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  teamIcon: {
    width: 56,
    height: 56,
    backgroundColor: '#f1f5f9',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  teamCount: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: '#1e40af',
    marginBottom: 4,
  },
  teamTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 4,
  },
  teamDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  valuesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  valuesGrid: {
    gap: 12,
  },
  valueCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  valueIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 4,
  },
  valueText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
    flex: 1,
  },
  imageSection: {
    marginHorizontal: 16,
    borderRadius: 16,
    overflow: 'hidden',
    height: 200,
    marginTop: 8,
  },
  teamImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  imageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(30, 64, 175, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  imageQuote: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
    lineHeight: 24,
  },
  bottomPadding: {
    height: 30,
  },
});
