import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { DollarSign, TrendingUp, PieChart, BarChart, CheckCircle } from 'lucide-react-native';

const financialHighlights = [
  {
    title: 'Annual Turnover',
    value: 'Rs. 10+ Cr',
    description: 'Consistent growth year over year',
  },
  {
    title: 'Financial Stability',
    value: 'AAA Rated',
    description: 'Strong financial foundation',
  },
  {
    title: 'Project Portfolio',
    value: 'Rs. 50+ Cr',
    description: 'Total project value executed',
  },
];

const capabilities = [
  'Qualified for large government tenders',
  'Strong banking relationships',
  'Proven track record of financial compliance',
  'Transparent accounting practices',
  'Timely project delivery record',
];

export default function FinancialsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <DollarSign size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>Financials</Text>
        <Text style={styles.headerSubtitle}>
          Strong financial backing for reliable project execution
        </Text>
      </View>

      {/* Key Metrics */}
      <View style={styles.metricsSection}>
        {financialHighlights.map((item, index) => (
          <View key={index} style={styles.metricCard}>
            <View style={styles.metricValueContainer}>
              <Text style={styles.metricValue}>{item.value}</Text>
            </View>
            <Text style={styles.metricTitle}>{item.title}</Text>
            <Text style={styles.metricDesc}>{item.description}</Text>
          </View>
        ))}
      </View>

      {/* Chart Placeholder */}
      <View style={styles.chartSection}>
        <View style={styles.chartCard}>
          <View style={styles.chartHeader}>
            <BarChart size={24} color="#1e40af" />
            <Text style={styles.chartTitle}>Growth Trajectory</Text>
          </View>
          <View style={styles.chartBarsContainer}>
            <View style={styles.chartBarRow}>
              <Text style={styles.chartLabel}>2021</Text>
              <View style={[styles.chartBarFill, { width: '50%', backgroundColor: '#93c5fd' }]} />
            </View>
            <View style={styles.chartBarRow}>
              <Text style={styles.chartLabel}>2022</Text>
              <View style={[styles.chartBarFill, { width: '65%', backgroundColor: '#60a5fa' }]} />
            </View>
            <View style={styles.chartBarRow}>
              <Text style={styles.chartLabel}>2023</Text>
              <View style={[styles.chartBarFill, { width: '80%', backgroundColor: '#3b82f6' }]} />
            </View>
            <View style={styles.chartBarRow}>
              <Text style={styles.chartLabel}>2024</Text>
              <View style={[styles.chartBarFill, { width: '100%', backgroundColor: '#2563eb' }]} />
            </View>
          </View>
          <Text style={styles.chartNote}>Revenue growth over years</Text>
        </View>
      </View>

      {/* Capabilities */}
      <View style={styles.capabilitiesSection}>
        <Text style={styles.sectionTitle}>Financial Capabilities</Text>
        <View style={styles.capabilitiesList}>
          {capabilities.map((item, index) => (
            <View key={index} style={styles.capabilityItem}>
              <CheckCircle size={18} color="#15803d" />
              <Text style={styles.capabilityText}>{item}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Trust Indicator */}
      <View style={styles.trustSection}>
        <View style={styles.trustCard}>
          <PieChart size={32} color="#ffffff" />
          <Text style={styles.trustTitle}>Financial Trust</Text>
          <Text style={styles.trustText}>
            With a strong financial foundation and transparent practices,
            we ensure reliable project execution and stakeholder confidence.
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
    backgroundColor: '#059669',
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
    color: '#d1fae5',
    textAlign: 'center',
  },
  metricsSection: {
    padding: 16,
    gap: 12,
  },
  metricCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  metricValueContainer: {
    marginBottom: 8,
  },
  metricValue: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#1e40af',
  },
  metricTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
    marginBottom: 4,
  },
  metricDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
  },
  chartSection: {
    padding: 16,
  },
  chartCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  chartTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
  },
  chartBarsContainer: {
    gap: 12,
    marginBottom: 16,
  },
  chartBarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  chartLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#64748b',
    width: 40,
  },
  chartBarFill: {
    height: 24,
    borderRadius: 4,
  },
  chartNote: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
  },
  capabilitiesSection: {
    padding: 16,
  },
  sectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  capabilitiesList: {
    gap: 12,
  },
  capabilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#ffffff',
    padding: 14,
    borderRadius: 10,
  },
  capabilityText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#475569',
    flex: 1,
  },
  trustSection: {
    padding: 16,
  },
  trustCard: {
    backgroundColor: '#1e40af',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  trustTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#ffffff',
    marginTop: 12,
    marginBottom: 8,
  },
  trustText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#dbeafe',
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomPadding: {
    height: 30,
  },
});
