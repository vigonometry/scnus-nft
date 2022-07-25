import { Text, View } from "react-native";
import scan from '../../../assets/icons/scan.png'
import merchant from '../../../assets/icons/merchant.png'
import ActionButton from "./ActionButton";

export default function TierCard() {
	const tierName = 'Bronze'
	const tokensInTier = 2
	const nextTierReq = 5
	return (
		<View style={{ width: '100%', padding: 24, backgroundColor: '#ecf0f1', marginTop: 24, minHeight: 240, borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 6 }, shadowOpacity: 0.1, shadowRadius: 6}}>
			<Text style={{ textTransform: 'uppercase', letterSpacing: 2, fontSize: 26}}>{tierName}</Text>
			<Text style={{ marginTop: 4, opacity: 0.6, fontSize: 14}}>Collect {nextTierReq} more to reach next tier!</Text>
			<View style={{ width: '100%', height: 30, backgroundColor: '#fff', marginTop: 16, borderRadius: 12, overflow: 'hidden'}}>
				<View style={{ width: `${100 * (tokensInTier / nextTierReq)}%`, height: 30, backgroundColor: '#e67e22'}}/>
			</View>
			<View style={{ flex: 1, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-around', maxHeight: 40, marginTop: 30, paddingTop: 20 }}>
				<ActionButton icon={scan} name="Scan"/>
				<View style={{ width: 1, height: 70, backgroundColor: '#999' }}/>
				<ActionButton icon={merchant} name="Merchants"/>
			</View>
		</View>
	)
}