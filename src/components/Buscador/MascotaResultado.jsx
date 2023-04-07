import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MascotaResultadoBarra from './MascotaResultadoBarra'
import MascotaContenido from '../Mascota/MascotaContenido'

const MascotaResultado = ({route}) => {
  const item = route.params
  return (
    <View>
      <MascotaResultadoBarra name={item.nombre} tipo={item.tipo} />
      <MascotaContenido 
        name={item.nombre}
        descripcion={item.descripcion}
        edad={item.edad}
        genero={item.genero}
        raza={item.raza}
        tipo={item.tipo}
        url={item.imagen}
        idDuenno={item.idDuenno}
        nombreDuenno={item.nombreDuenno}
        telefonoDuenno={item.telefonoDuenno}
        edadDuenno={item.edadDuenno}
      />
    </View>
  )
}

export default MascotaResultado

const styles = StyleSheet.create({})