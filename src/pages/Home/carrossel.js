//npx expo install react-native-reanimated
// foi colocado isso no-> babel-config.js: plugins: ['react-native-reanimated/plugin'],

import React,{useState,useEffect,useRef} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions,FlatList, Platform ,Animated} from 'react-native';

const {width} = Dimensions.get('window')

const conteudo = [
  {
    id: '1',
    title: 'UBS - Vila Curuça',
    img: require('./../../../assets/ubs.png'),
},
{
    id: '2',
    title: 'UBS - Jd Robru',
    img: require('./../../../assets/ubs2.png'),
},
{
    id: '3',
    title: 'UBS - Guaianases II',
    img: require('./../../../assets/ubs3.png'),
},
{
  id: '4',
  title: 'UBS - Parada XV',
  img: require('./../../../assets/ubs.png'),
},

  ];

const Carrossel=()=> {

    const [currentIndex,setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;


    const flatlistRef = useRef(null);

    const onViewRef = useRef(({viewableItems})=>{
        if(viewableItems.length>0){
            setCurrentIndex(viewableItems[0].index);
        }
    });

    const onViewableItemsChanged = useRef(({ viewableItems }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index);
      }
    }).current;

    const viewConfigRef = useRef({viewAreaCoveragePercentThreshold:50});
    
    const renderItem =({item}) =>{
        return (
            <View style={styles.container}>
                <Text style={styles.Text}>{item.title}</Text>
                <TouchableOpacity style={styles.img}>
                  <Image style={styles.image} source={item.img} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button}>
                  <Text style={styles.TextPlus}>+</Text>
                </TouchableOpacity>
            </View>
         );
    };
    
  return (
    <View style={styles.Carrosselcontainer}>
     <FlatList
        data={conteudo}
        renderItem={renderItem}
        keyExtractor={(item)=>item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        ref={flatlistRef}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        snapToAlignment="center"
        decelerationRate="fast"

        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={20}

     />
      <Pagination data={conteudo} scrollX={scrollX} />

     </View>
     

  );
};

const Pagination = ({ data, scrollX }) => {
  return (
    <View style={styles.paginationContainer}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];

        const dotScale = scrollX.interpolate({
          inputRange,
          outputRange: [1.4, 3.0, 1.2],
          extrapolate: 'clamp',
        });

        const dotColor = scrollX.interpolate({
          inputRange,
          outputRange: ['#546772','#014063', '#546772'],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            key={i.toString()}
            style={[styles.dot, { transform: [{ scale: dotScale }], backgroundColor: dotColor }]}
          />
        );
      })}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: 170,
    height: 170,
    backgroundColor: '#1F2B5B',
    borderRadius: 25,
    marginLeft: 20,
    marginTop: 0,
    // position: 'absolute',
    // bottom: 15,
  },
  img: {
    backgroundColor: 'black',
    width: 150,
    height: 60,
    borderRadius: 18,
    top: 10,
    position: 'absolute',
  },
  image:{
    width: '100%',
    height: '100%',
    borderRadius: 18,

  },
  Text: {
    width: '100%',
    height: '35%',
    fontSize: 14,
    paddingHorizontal: 4,
    color: 'white',
    fontWeight: '900',
    top: 30,

  },
  Button: {
    // paddingHorizontal: 20, 
    borderRadius: 100,
    backgroundColor: '#3DBDEC',
    width: '23%',
    height:'23%',
    top:25,
    left:40,
    
  },
  TextPlus: {
    width: 40,
    fontSize: 25,
    paddingHorizontal: 8,
    color: 'white',
    fontWeight: '800',
    bottom:5,
    bottom:2,
  },
  Carrosselcontainer:{
    justifyContent:'center',
    alignItems:'center',
    // backgroundColor: 'black', 
    bottom:45

  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    opacity:0.8
  },
  dot: {
    height: 3,
    width: 4,
    borderRadius: 5,
    marginHorizontal: 8,

  },
});

export default Carrossel;
