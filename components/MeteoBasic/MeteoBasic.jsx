import { s } from "./MeteoBasic.style";
import { Txt } from "../Txt/Txt";
import { Image, TouchableOpacity, View } from "react-native";
import { Clock } from "../Clock/Clock";
import { useNavigation } from "@react-navigation/native";

export function MeteoBasic({
  temperature,
  interpretation,
  city,
  dailyWeather,
}) {
  const nav = useNavigation();
  console.log({ city, ...dailyWeather });
  return (
    <>
      <View style={s.clock}>
        <Clock />
      </View>
      <View>
        <Txt>{city}</Txt>
      </View>

      <View style={s.interpretation}>
        <Txt style={s.interpretation_txt}>{interpretation.label}</Txt>
      </View>

      <View style={s.temperature_box}>
        
        {/* //tambahkan fungsi onPress untuk navigasi ke halaman Forecasts */}
        
        <TouchableOpacity
          // onPress={() => nav.navigate('Forecasts', { time: dailyWeather.time, temperature, interpretation, city })}
          onPress={() => nav.navigate('Forecasts',{"temperature":temperature, "interpretation":interpretation, "city": city, "dailyWeather": dailyWeather})}
        >
          <Txt style={s.temperature}>{temperature}°</Txt>
        </TouchableOpacity>

        <Image style={s.image} source={interpretation.image} />
      </View>
    </>
  );
}
