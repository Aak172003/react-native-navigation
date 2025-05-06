import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const NotificationBox = ({ notifications, onNotificationPress }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [animation] = useState(new Animated.Value(0));
    const screenWidth = Dimensions.get('window').width;

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

    const boxWidth = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [60, screenWidth],
    });

    return (
        <Animated.View style={[styles.container, { height: boxHeight, width: boxWidth }]}>
            <TouchableOpacity style={styles.header} onPress={toggleExpand}>
                <View style={styles.headerContent}>
                    <View style={styles.iconContainer}>
                        <Icon name="notifications" size={34} color="blue" />
                        {notifications.length > 0 && (
                            <View style={styles.badgeContainer}>
                                {console.log("notifications ::::::::::: ", notifications)}
                                <Text style={styles.badgeText}>{notifications.length}</Text>
                            </View>
                        )}
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
        top: 10,
        right: 10,
        borderRadius: 10,
    },
    header: {
        padding: 15,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        position: 'relative',
    },
    badgeContainer: {
        position: 'absolute',
        top: -8,
        right: -12,
        backgroundColor: '#FF5252',
        borderRadius: 12,
        minWidth: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 4,
    },
    badgeText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',
    },
    list: {
        flex: 1,
    },
    notificationItem: {
        padding: 15,
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