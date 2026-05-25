import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Image } from 'react-native';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react-native';

export default function ContactScreen() {
  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleEmail = () => {
    Linking.openURL('mailto:info.versatile.star@gmail.com');
  };

  const handleMaps = () => {
    const address = encodeURIComponent('Haridwar, Uttarakhand, India');
    Linking.openURL(`https://www.google.com/maps/search/${address}`);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Image */}
      <Image
        source={{ uri: 'https://images.pexels.com/photo-6843850/pexels-photo-6843850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' }}
        style={styles.headerImage}
        resizeMode="cover"
      />

      {/* Contact Card */}
      <View style={styles.contactCard}>
        <Text style={styles.contactTitle}>Get in Touch</Text>
        <Text style={styles.contactDesc}>
          We'd love to hear from you. Reach out for quotes, inquiries, or partnerships.
        </Text>

        {/* Phone Numbers */}
        <View style={styles.contactSection}>
          <View style={styles.sectionHeader}>
            <Phone size={20} color="#1e40af" />
            <Text style={styles.sectionTitle}>Phone</Text>
          </View>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleCall('+919045875958')}
          >
            <Text style={styles.contactText}>+91 9045875958</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleCall('+919690965560')}
          >
            <Text style={styles.contactText}>+91 9690965560</Text>
          </TouchableOpacity>
        </View>

        {/* Email */}
        <View style={styles.contactSection}>
          <View style={styles.sectionHeader}>
            <Mail size={20} color="#1e40af" />
            <Text style={styles.sectionTitle}>Email</Text>
          </View>
          <TouchableOpacity style={styles.contactItem} onPress={handleEmail}>
            <Text style={styles.contactText}>info.versatile.star@gmail.com</Text>
          </TouchableOpacity>
        </View>

        {/* Address */}
        <View style={styles.contactSection}>
          <View style={styles.sectionHeader}>
            <MapPin size={20} color="#1e40af" />
            <Text style={styles.sectionTitle}>Address</Text>
          </View>
          <TouchableOpacity style={styles.contactItem} onPress={handleMaps}>
            <Text style={styles.contactText}>Haridwar, Uttarakhand, India</Text>
          </TouchableOpacity>
        </View>

        {/* Business Hours */}
        <View style={styles.contactSection}>
          <View style={styles.sectionHeader}>
            <Clock size={20} color="#1e40af" />
            <Text style={styles.sectionTitle}>Business Hours</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactText}>Monday - Saturday: 9:00 AM - 6:00 PM</Text>
          </View>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={[styles.actionButton, styles.primaryButton]} onPress={handleEmail}>
          <Send size={20} color="#ffffff" />
          <Text style={styles.primaryButtonText}>Send Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => handleCall('+919045875958')}
        >
          <Phone size={20} color="#1e40af" />
          <Text style={styles.actionButtonText}>Call Now</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleMaps}>
          <MapPin size={20} color="#1e40af" />
          <Text style={styles.actionButtonText}>View on Maps</Text>
        </TouchableOpacity>
      </View>

      {/* Request Quote */}
      <View style={styles.quoteSection}>
        <MessageCircle size={28} color="#1e40af" />
        <Text style={styles.quoteTitle}>Request a Quote</Text>
        <Text style={styles.quoteText}>
          Looking for a project estimate? Contact us with your requirements and we'll provide
          a detailed quote within 24 hours.
        </Text>
        <TouchableOpacity style={styles.quoteButton} onPress={handleEmail}>
          <Text style={styles.quoteButtonText}>Get a Quote</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>2026 Versatile Star Private Limited</Text>
        <Text style={styles.footerSubtext}>All rights reserved.</Text>
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
  headerImage: {
    width: '100%',
    height: 180,
  },
  contactCard: {
    backgroundColor: '#ffffff',
    margin: 16,
    marginTop: -40,
    borderRadius: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 16,
    elevation: 5,
  },
  contactTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1e293b',
    marginBottom: 8,
    textAlign: 'center',
  },
  contactDesc: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  contactSection: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#1e293b',
  },
  contactItem: {
    backgroundColor: '#f1f5f9',
    padding: 14,
    borderRadius: 10,
    marginBottom: 8,
  },
  contactText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: '#475569',
  },
  quickActions: {
    paddingHorizontal: 16,
    gap: 10,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#1e40af',
  },
  primaryButton: {
    backgroundColor: '#1e40af',
    borderWidth: 0,
  },
  actionButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#1e40af',
  },
  primaryButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
  quoteSection: {
    margin: 16,
    marginTop: 24,
    backgroundColor: '#dbeafe',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
  },
  quoteTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginTop: 12,
    marginBottom: 8,
    textAlign: 'center',
  },
  quoteText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  quoteButton: {
    backgroundColor: '#1e40af',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  quoteButtonText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 15,
    color: '#ffffff',
  },
  footer: {
    padding: 24,
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1e293b',
    marginBottom: 4,
  },
  footerSubtext: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#94a3b8',
  },
  bottomPadding: {
    height: 30,
  },
});
