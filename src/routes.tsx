import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const { Navigator, Screen } = createStackNavigator()

import OrphanagesMap from './pages/OrphanagesMap'
import OrphanageDetails from './pages/OrphanageDetails'
import SelectMapPosition from './pages/createOrphanage/SelectMapPosition'
import OrphanageData from './pages/createOrphanage/OrphanageData'
import Header from './components/Header'

interface RoutesProp {
    theme: string
}

export default function Routes({ theme }: RoutesProp) {


    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: theme == 'light' ? '#f2f3f5' : '#16213e' } }} >
                <Screen name="OrphanagesMap">
                    {props => <OrphanagesMap theme={theme} />}
                </Screen>
                <Screen name="OrphanageDetails" options={{ headerShown: true, header: () => <Header title="Orfanato" theme={theme} showCancel={false} /> }} >
                    {props => <OrphanageDetails theme={theme} />}
                </Screen>
                <Screen name="SelectMapPosition" options={{ headerShown: true, header: () => <Header theme={theme} title="Selecione o endereço" showCancel={false} /> }} >
                    {props => <SelectMapPosition theme={theme} />}
                </Screen>
                <Screen name="OrphanageData" component={OrphanageData} options={{ headerShown: true, header: () => <Header theme={theme} title="Adicione um orfanato" showCancel={true} /> }} />
            </Navigator>
        </NavigationContainer>
    )
}
