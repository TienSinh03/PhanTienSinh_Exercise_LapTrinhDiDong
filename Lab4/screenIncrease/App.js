import React, { useState } from "react";
import { View, Text, Button } from "react-native";

export default function App() {
  const [diceRolls, setDiceRolls] = useState(1);

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls(diceRolls + 1);
        }}
      />
      <Text style={{ fontSize: 24 }}>{diceRolls}</Text>
      <Button
        title="Reload!"
        onPress={() => {
          setDiceRolls(1);
        }}
      />
    </View>
  );
}
