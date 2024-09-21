import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default function App() {
  const [diceRolls, setDiceRolls] = useState([1,2,3])

  return (
    <View>
      <Button
        title="Roll dice!"
        onPress={() => {
          setDiceRolls(diceRolls.map(roll => roll + 1))
        }}
      />
      {diceRolls.map((diceRoll, index) => (
        <Text style={{ fontSize: 24 }} key={index}>
          {diceRoll}
        </Text>
      ))}
      <Button
        title="Reload!"
        onPress={() => {
          setDiceRolls([1,2,3])
        }}
      />
    </View>
  )
}