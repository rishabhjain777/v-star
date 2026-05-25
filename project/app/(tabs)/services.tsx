import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Building, Leaf, Zap, Users, Wrench, Settings, Shield, CheckCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const services = [
  {
    icon: Building,
    title: 'Civil Works',
    description: 'Comprehensive civil engineering solutions including construction, infrastructure development, and project management.',
    features: ['Construction Projects', 'Infrastructure Development', 'Road Works', 'Building Construction'],
    color: '#1e40af',
    bgColor: '#dbeafe',
  },
  {
    icon: Settings,
    title: 'Hydro Mechanical',
    description: 'Expert hydro-mechanical works for dams, canals, and water infrastructure projects.',
    features: ['Dam Construction', 'Gate Installation', 'Canal Systems', 'Irrigation Projects'],
    color: '#0d9488',
    bgColor: '#ccfbf1',
  },
  {
    icon: Zap,
    title: 'Power Sector Equipment',
    description: 'Supply and maintenance of power sector equipment with expert technical support.',
    features: ['Equipment Supply', 'Installation Services', 'Maintenance Contracts', 'Technical Support'],
    color: '#d97706',
    bgColor: '#fef3c7',
  },
  {
    icon: Leaf,
    title: 'Solid Waste Management',
    description: 'Innovative waste management solutions focusing on recycling and sustainable practices.',
    features: ['Waste Collection', 'Recycling Facilities', 'Segregation Systems', 'Green Solutions'],
    color: '#15803d',
    bgColor: '#dcfce7',
  },
  {
    icon: Users,
    title: 'Manpower Deployment',
    description: 'Skilled workforce deployment across various sectors with comprehensive training.',
    features: ['Skilled Workers', 'Technical Staff', 'Project Teams', 'Safety Training'],
    color: '#6366f1',
    bgColor: '#e0e7ff',
  },
  {
    icon: Wrench,
    title: 'Equipment AMC',
    description: 'Annual maintenance contracts for various industrial and power sector equipment.',
    features: ['Preventive Maintenance', '24/7 Support', 'Spare Parts', 'Performance Audits'],
    color: '#dc2626',
    bgColor: '#fee2e2',
  },
];

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Our Services</Text>
        <Text style={styles.headerSubtitle}>
          Comprehensive engineering and infrastructure solutions
        </Text>
      </View>

      {/* Services Grid */}
      <View style={styles.servicesGrid}>
        {services.map((service, index) => (
          <View key={index} style={styles.serviceCard}>
            <View style={[styles.serviceIcon, { backgroundColor: service.bgColor }]}>
              <service.icon size={32} color={service.color} />
            </View>
            <Text style={styles.serviceTitle}>{service.title}</Text>
            <Text style={styles.serviceDesc}>{service.description}</Text>
            <View style={styles.featuresList}>
              {service.features.map((feature, fIndex) => (
                <View key={fIndex} style={styles.featureItem}>
                  <CheckCircle size={14} color={service.color} />
                  <Text style={styles.featureText}>{feature}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Need Our Services?</Text>
        <Text style={styles.ctaText}>
          Contact us for a customized solution for your project.
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Get a Quote</Text>
        </TouchableOpacity>
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
    backgroundColor: '#1e40af',
    padding: 24,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
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
    color: '#dbeafe',
    lineHeight: 22,
  },
  servicesGrid: {
    padding: 16,
  },
  serviceCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  serviceIcon: {
    width: 64,
    height: 64,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  serviceTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 8,
  },
  serviceDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresList: {
    gap: 8,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  featureText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#475569',
  },
  ctaSection: {
    backgroundColor: '#ffffff',
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  ctaTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 8,
  },
  ctaText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
  bottomPadding: {
    height: 30,
  },
});
