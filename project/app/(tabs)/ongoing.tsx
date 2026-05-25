import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Clock, MapPin, Users, CheckCircle, AlertCircle, Play } from 'lucide-react-native';

const ongoingProjects = [
  {
    title: 'Hydro Power Plant Modernization',
    client: 'UJVN Ltd.',
    location: 'Uttarakhand',
    progress: 75,
    status: 'On Track',
    team: 45,
    startDate: 'Jan 2024',
    endDate: 'Dec 2025',
  },
  {
    title: 'Municipal Waste Processing Unit',
    client: 'Haridwar Municipal Corporation',
    location: 'Haridwar',
    progress: 60,
    status: 'On Track',
    team: 32,
    startDate: 'Mar 2024',
    endDate: 'Aug 2025',
  },
  {
    title: 'Dam Gate Rehabilitation',
    client: 'NHPC Ltd.',
    location: 'Himachal Pradesh',
    progress: 40,
    status: 'On Track',
    team: 28,
    startDate: 'Jun 2024',
    endDate: 'Mar 2026',
  },
];

export default function OngoingScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <Clock size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>Ongoing Projects</Text>
        <Text style={styles.headerSubtitle}>
          Currently executing with excellence
        </Text>
      </View>

      {/* Summary Cards */}
      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>3</Text>
          <Text style={styles.summaryLabel}>Active Projects</Text>
        </View>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>105</Text>
          <Text style={styles.summaryLabel}>Total Workforce</Text>
        </View>
      </View>

      {/* Projects List */}
      <View style={styles.projectsList}>
        {ongoingProjects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <View style={styles.projectHeader}>
              <View style={styles.statusBadge}>
                <Play size={12} color="#15803d" />
                <Text style={styles.statusText}>In Progress</Text>
              </View>
              <View style={[styles.statusIndicator, { backgroundColor: '#dcfce7' }]}>
                <CheckCircle size={14} color="#15803d" />
                <Text style={[styles.statusMessage, { color: '#15803d' }]}>
                  {project.status}
                </Text>
              </View>
            </View>

            <Text style={styles.projectTitle}>{project.title}</Text>
            <Text style={styles.clientText}>Client: {project.client}</Text>

            <View style={styles.locationRow}>
              <MapPin size={14} color="#64748b" />
              <Text style={styles.locationText}>{project.location}</Text>
            </View>

            {/* Progress Bar */}
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${project.progress}%` }]}
                />
              </View>
              <Text style={styles.progressText}>{project.progress}%</Text>
            </View>

            <View style={styles.projectMeta}>
              <View style={styles.metaItem}>
                <Users size={14} color="#1e40af" />
                <Text style={styles.metaText}>{project.team} Team Members</Text>
              </View>
              <View style={styles.metaItem}>
                <Clock size={14} color="#64748b" />
                <Text style={styles.metaDateText}>
                  {project.startDate} - {project.endDate}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Info Section */}
      <View style={styles.infoSection}>
        <View style={styles.infoCard}>
          <AlertCircle size={24} color="#1e40af" />
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Regular Updates</Text>
            <Text style={styles.infoText}>
              All projects are monitored with regular progress reports and quality checks.
            </Text>
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
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#d97706',
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
    color: '#fef3c7',
    textAlign: 'center',
  },
  summaryContainer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
  },
  summaryCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: '#1e40af',
    marginBottom: 4,
  },
  summaryLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#64748b',
    textAlign: 'center',
  },
  projectsList: {
    padding: 16,
    gap: 16,
  },
  projectCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#dbeafe',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#1e40af',
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusMessage: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
  },
  projectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 4,
  },
  clientText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#64748b',
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 16,
  },
  locationText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: '#e2e8f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1e40af',
    borderRadius: 5,
  },
  progressText: {
    fontFamily: 'Inter-Bold',
    fontSize: 14,
    color: '#1e40af',
    minWidth: 40,
    textAlign: 'right',
  },
  projectMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    paddingTop: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaText: {
    fontFamily: 'Inter-Medium',
    fontSize: 12,
    color: '#475569',
  },
  metaDateText: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#64748b',
  },
  infoSection: {
    padding: 16,
  },
  infoCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#dbeafe',
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  infoContent: {
    flex: 1,
  },
  infoTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#1e293b',
    marginBottom: 4,
  },
  infoText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#475569',
    lineHeight: 18,
  },
  bottomPadding: {
    height: 30,
  },
});
