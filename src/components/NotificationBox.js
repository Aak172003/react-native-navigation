import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationBox = ({ notifications, onNotificationPress }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        Animated.timing(animation, {
            toValue: isExpanded ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };

    const boxHeight = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [60, 300],
    });

    return (
        <Animated.View style={[styles.container, { height: boxHeight }]}>
            <TouchableOpacity style={styles.header} onPress={toggleExpand}>
                <View style={styles.headerContent}>
                    <Icon name="notifications" size={24} color="white" />
                    <Text style={styles.headerText}>Notifications</Text>
                    <View style={styles.badgeContainer}>
                        <Text style={styles.badgeText}>{notifications.length}</Text>
                    </View>
                </View>
            </TouchableOpacity>

            {isExpanded && (
                <FlatList
                    data={notifications}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.notificationItem}
                            onPress={() => onNotificationPress(item)}
                        >
                            <Text style={styles.notificationTitle}>{item.title}</Text>
                            <Text style={styles.notificationBody}>{item.body}</Text>
                            <Text style={styles.notificationTime}>
                                {new Date(item.timestamp).toLocaleTimeString()}
                            </Text>
                        </TouchableOpacity>
                    )}
                    style={styles.list}
                />
            )}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        right: 20,
        width: 300,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        overflow: 'hidden',
    },
    header: {
        padding: 15,
        backgroundColor: '#2196F3',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
    },
    badgeContainer: {
        backgroundColor: '#FF5252',
        borderRadius: 12,
        minWidth: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto',
        paddingHorizontal: 6,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    notificationItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    notificationTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    notificationBody: {
        fontSize: 12,
        color: '#666',
        marginBottom: 5,
    },
    notificationTime: {
        fontSize: 10,
        color: '#999',
    },
});

export default NotificationBox; 