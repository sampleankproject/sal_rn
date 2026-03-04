// import React from 'react';
// // import type {PropsWithChildren} from 'react';
// import {ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,Button} from 'react-native';
// import {Colors,DebugInstructions,Header,LearnMoreLinks,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { NavigationContainer,useNavigation } from '@react-navigation/native';


//   const TabServices = ({route}) => {
//     // console.log('aaaaaaaaaaA', route)
//     return <Text>This is TabServices</Text>;
//   };
//   export default TabServices




  ////////////////////////////

  import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from '@react-native-vector-icons/ionicons';

const projects = [
  {
    id: '1',
    title: 'Project 1',
    subtitle: 'Front-End\nDevelopment',
    date: 'October 20, 2020',
    colors: ['#9C2CF3', '#3A49F9'],
  },
  {
    id: '2',
    title: 'Project 2',
    subtitle: 'Back-End\nDevelopment',
    date: 'October 24, 2020',
    colors: ['#C6A7FF', '#9F8CFF'],
  },
];

const TabServices = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Icon name="menu-outline" size={26} color="#2E3557" />
          <Icon name="person-circle-outline" size={30} color="#2E3557" />
        </View>

        {/* Greeting */}
        <Text style={styles.hello}>Hello Advith!</Text>
        <Text style={styles.subHello}>Have a nice day.</Text>

        {/* Tabs */}
        <View style={styles.tabs}>
          <View style={styles.activeTab}>
            <Text style={styles.activeTabText}>My Tasks</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabText}>In-progress</Text>
          </View>
          <View style={styles.tab}>
            <Text style={styles.tabText}>Completed</Text>
          </View>
        </View>

        {/* Projects */}
        <FlatList
          data={projects}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          contentContainerStyle={{ paddingVertical: 20 }}
          renderItem={({ item }) => (
            <LinearGradient
              colors={item.colors}
              style={styles.projectCard}
            >
              <View style={styles.projectIcon}>
                <Icon name="bulb-outline" size={22} color="#fff" />
              </View>

              <Text style={styles.projectTitle}>{item.title}</Text>
              <Text style={styles.projectSubtitle}>{item.subtitle}</Text>
              <Text style={styles.projectDate}>{item.date}</Text>
            </LinearGradient>
          )}
        />

        {/* Progress */}
        <Text style={styles.sectionTitle}>Progress</Text>

        {[1, 2].map(i => (
          <View key={i} style={styles.progressCard}>
            <View style={styles.progressIcon}>
              <Icon name="clipboard-outline" size={22} color="#fff" />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.progressTitle}>Design Changes</Text>
              <Text style={styles.progressSub}>2 Days ago</Text>
            </View>

            <Icon name="ellipsis-vertical" size={18} color="#C7CCE4" />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Tab */}
      <View style={styles.bottomTab}>
        <Icon name="home" size={24} color="#7B61FF" />
        <Icon name="calendar-outline" size={22} color="#C7CCE4" />
        <Icon name="notifications-outline" size={22} color="#C7CCE4" />
        <Icon name="search-outline" size={22} color="#C7CCE4" />
      </View>
    </View>
  );
};

export default TabServices;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F6FF',
    paddingHorizontal: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  hello: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2E3557',
    marginTop: 20,
  },

  subHello: {
    fontSize: 14,
    color: '#9AA1C2',
    marginTop: 4,
  },

  tabs: {
    flexDirection: 'row',
    marginTop: 24,
  },

  activeTab: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },

  activeTabText: {
    color: '#2E3557',
    fontWeight: '600',
  },

  tab: {
    backgroundColor: '#E9EDFF',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 20,
    marginRight: 10,
  },

  tabText: {
    color: '#6F76A7',
  },

  projectCard: {
    width: 260,
    borderRadius: 24,
    padding: 20,
    marginRight: 16,
  },

  projectIcon: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  projectTitle: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },

  projectSubtitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
    marginTop: 8,
  },

  projectDate: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 20,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#2E3557',
    marginTop: 10,
  },

  progressCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },

  progressIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#7B61FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },

  progressTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E3557',
  },

  progressSub: {
    fontSize: 12,
    color: '#9AA1C2',
    marginTop: 4,
  },

  bottomTab: {
    height: 64,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
