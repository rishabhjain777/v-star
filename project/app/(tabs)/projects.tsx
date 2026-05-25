import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { FolderOpen, MapPin, Calendar, ArrowRight } from 'lucide-react-native';

const projects = [
  {
    title: 'Dam Gate Installation',
    client: 'NHPC Ltd.',
    location: 'Uttarakhand',
    year: '2024',
    category: 'Hydro Mechanical',
    image: 'https://images.pexels.com/photo-33123166/pexels-photo-33123166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Power Plant Maintenance',
    client: 'UJVN Ltd.',
    location: 'Uttarakhand',
    year: '2024',
    category: 'Power Sector',
    image: 'https://images.pexels.com/photo-4164054/pexels-photo-4164054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Waste Segregation Facility',
    client: 'Municipal Corporation',
    location: 'Haridwar',
    year: '2023',
    category: 'Waste Management',
    image: 'https://images.pexels.com/photo-6324734/pexels-photo-6324734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    title: 'Canal Lining Project',
    client: 'SJVN Ltd.',
    location: 'Himachal Pradesh',
    year: '2023',
    category: 'Civil Works',
    image: 'https://images.pexels.com/photo-2619002/pexels-photo-2619002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

export default function ProjectsScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerIcon}>
          <FolderOpen size={32} color="#ffffff" />
        </View>
        <Text style={styles.headerTitle}>Our Projects</Text>
        <Text style={styles.headerSubtitle}>
          A track record of successful engineering projects
        </Text>
      </View>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>50+</Text>
          <Text style={styles.statLabel}>Projects Completed</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>15+</Text>
          <Text style={styles.statLabel}>Years Experience</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>10+</Text>
          <Text style={styles.statLabel}>Major Clients</Text>
        </View>
      </View>

      {/* Projects List */}
      <View style={styles.projectsList}>
        {projects.map((project, index) => (
          <View key={index} style={styles.projectCard}>
            <Image
              source={{ uri: project.image }}
              style={styles.projectImage}
              resizeMode="cover"
            />
            <View style={styles.projectContent}>
              <View style={styles.categoryTag}>
                <Text style={styles.categoryText}>{project.category}</Text>
              </View>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <View style={styles.projectMeta}>
                <View style={styles.metaItem}>
                  <MapPin size={14} color="#64748b" />
                  <Text style={styles.metaText}>{project.location}</Text>
                </View>
                <View style={styles.metaItem}>
                  <Calendar size={14} color="#64748b" />
                  <Text style={styles.metaText}>{project.year}</Text>
                </View>
              </View>
              <Text style={styles.clientText}>Client: {project.client}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaTitle}>Have a Project in Mind?</Text>
        <TouchableOpacity style={styles.ctaButton}>
          <Text style={styles.ctaButtonText}>Discuss Your Project</Text>
          <ArrowRight size={18} color="#1e40af" />
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
    color: '#dbeafe',
    textAlign: 'center',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  statNumber: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1e40af',
    marginBottom: 4,
  },
  statLabel: {
    fontFamily: 'Inter-Medium',
    fontSize: 11,
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
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  projectImage: {
    width: '100%',
    height: 180,
  },
  projectContent: {
    padding: 16,
  },
  categoryTag: {
    backgroundColor: '#dbeafe',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  categoryText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 11,
    color: '#1e40af',
  },
  projectTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1e293b',
    marginBottom: 12,
  },
  projectMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontFamily: 'Inter-Regular',
    fontSize: 13,
    color: '#64748b',
  },
  clientText: {
    fontFamily: 'Inter-Medium',
    fontSize: 13,
    color: '#475569',
  },
  ctaContainer: {
    marginHorizontal: 16,
    marginTop: 8,
    backgroundColor: '#ffffff',
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
    marginBottom: 16,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    gap: 8,
  },
  ctaButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#1e40af',
  },
  bottomPadding: {
    height: 30,
  },
});
