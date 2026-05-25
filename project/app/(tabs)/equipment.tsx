import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Wrench, Settings, Zap, Shield, Clock, CheckCircle, Phone } from 'lucide-react-native';

const equipmentCategories = [
  {
    title: 'Power Sector Equipment',
    items: ['Transformers', 'Switchgear', 'Control Panels', 'Cable Systems'],
    icon: Zap,
  },
  {
    title: 'Hydro Mechanical',
    items: ['Dam Gates', 'Hoists', 'Valves', 'Penstocks'],
    icon: Settings,
  },
  {
    title: 'Civil Equipment',
    items: ['Excavators', 'Loaders', 'Compactors', 'Concrete Mixers'],
    icon: Wrench,
  },
];

const amcServices = [
  {
    title: 'Preventive Maintenance',
    description: 'Regular scheduled maintenance to prevent breakdowns',
    icon: Shield,
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and emergency response',
    icon: Phone,
  },
  {
    title: 'Performance Audits',
    description: 'Regular equipment health checks and optimization',
    icon: Clock,
  },
];

export default function EquipmentScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Wrench size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>Equipment & AMC</Text>
        <Text style={styles.headerSubtitle}>
          Industrial equipment supply and maintenance services
        </Text>
      </View>

      {/* Equipment Categories */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Equipment Categories</Text>
        {equipmentCategories.map((category, index) => (
          <View key={index} style={styles.categoryCard}>
            <View style={styles.categoryHeader}>
              <View style={styles.categoryIcon}>
                <category.icon size={28} color="#1e40af" />
              </View>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </View>
            <View style={styles.itemsList}>
              {category.items.map((item, i) => (
                <View key={i} style={styles.itemRow}>
                  <CheckCircle size={14} color="#15803d" />
                  <Text style={styles.itemText}>{item}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>

      {/* AMC Section */}
      <View style={styles.amcSection}>
        <Text style={styles.sectionTitle}>AMC Services</Text>
        <Text style={styles.amcSubtitle}>
          Annual Maintenance Contracts for reliable equipment performance
        </Text>
        {amcServices.map((service, index) => (
          <View key={index} style={styles.amcCard}>
            <View style={styles.amcIconContainer}>
              <service.icon size={24} color="#1e40af" />
            </View>
            <View style={styles.amcContent}>
              <Text style={styles.amcTitle}>{service.title}</Text>
              <Text style={styles.amcDesc}>{service.description}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Need Equipment Services?</Text>
        <Text style={styles.ctaText}>
          Contact us for equipment supply or AMC inquiries
        </Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Request Quote</Text>
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
    backgroundColor: '#0d9488',
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
    color: '#ccfbf1',
    textAlign: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  categoryCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  categoryHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  categoryIcon: {
    width: 52,
    height: 52,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1e293b',
    flex: 1,
  },
  itemsList: {
    gap: 10,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  itemText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#475569',
  },
  amcSection: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 16,
    marginBottom: 16,
  },
  amcSubtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    marginBottom: 20,
  },
  amcCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f8fafc',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    gap: 12,
  },
  amcIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#dbeafe',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  amcContent: {
    flex: 1,
  },
  amcTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#1e293b',
    marginBottom: 4,
  },
  amcDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
    lineHeight: 18,
  },
  ctaSection: {
    marginHorizontal: 16,
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
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
    color: '#475569',
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
