import React from 'react';
import { View } from 'react-native';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';

import Add from 'binary-ui-icons/binary/Add';
import AddCard from 'binary-ui-icons/binary/AddCard';
import AddEmoji from 'binary-ui-icons/binary/AddEmoji';
import Apple from 'binary-ui-icons/binary/Apple';
import AppleAlt from 'binary-ui-icons/binary/AppleAlt';
import Approval from 'binary-ui-icons/binary/Approval';
import ArrowDown from 'binary-ui-icons/binary/ArrowDown';
import ArrowLeft from 'binary-ui-icons/binary/ArrowLeft';
import ArrowRight from 'binary-ui-icons/binary/ArrowRight';
import ArrowUp from 'binary-ui-icons/binary/ArrowUp';
import Autoconnect from 'binary-ui-icons/binary/Autoconnect';
import Behance from 'binary-ui-icons/binary/Behance';
import Call from 'binary-ui-icons/binary/Call';
import CallAlt from 'binary-ui-icons/binary/CallAlt';
import CalendarView from 'binary-ui-icons/binary/CalendarView';
import CameraAlt from 'binary-ui-icons/binary/CameraAlt';
import Cancel from 'binary-ui-icons/binary/Cancel';
import Card from 'binary-ui-icons/binary/Card';
import CardAlt from 'binary-ui-icons/binary/CardAlt';
import CardBroken from 'binary-ui-icons/binary/CardBroken';
import Cards from 'binary-ui-icons/binary/Cards';
import CardsAlt from 'binary-ui-icons/binary/CardsAlt';
import Check from 'binary-ui-icons/binary/Check';
import CheckAlt from 'binary-ui-icons/binary/CheckAlt';
import Circle from 'binary-ui-icons/binary/Circle';
import Copy from 'binary-ui-icons/binary/Copy';
import Delete from 'binary-ui-icons/binary/Delete';
import DeleteCharacter from 'binary-ui-icons/binary/DeleteCharacter';
import DeleteAlt from 'binary-ui-icons/binary/DeleteAlt';
import Deleted from 'binary-ui-icons/binary/Deleted';
import DeletedAlt from 'binary-ui-icons/binary/DeletedAlt';
import Designer from 'binary-ui-icons/binary/Designer';
import Done from 'binary-ui-icons/binary/Done';
import Drawer from 'binary-ui-icons/binary/Drawer';
import Event from 'binary-ui-icons/binary/Event';
import Facebook from 'binary-ui-icons/binary/Facebook';
import Facetime from 'binary-ui-icons/binary/Facetime';
import FacetimeAlt from 'binary-ui-icons/binary/FacetimeAlt';
import Favorites from 'binary-ui-icons/binary/Favorites';
import FavoritesAlt from 'binary-ui-icons/binary/FavoritesAlt';
import Google from 'binary-ui-icons/binary/Google';
import Github from 'binary-ui-icons/binary/Github';
import Info from 'binary-ui-icons/binary/Info';
import InfoAlt from 'binary-ui-icons/binary/InfoAlt';
import Instagram from 'binary-ui-icons/binary/Instagram';
import InstagramAlt from 'binary-ui-icons/binary/InstagramAlt';
import KakaoPlus from 'binary-ui-icons/binary/KakaoPlus';
import Kakaotalk from 'binary-ui-icons/binary/Kakaotalk';
import Keypad from 'binary-ui-icons/binary/Keypad';
import KeypadAlt from 'binary-ui-icons/binary/KeypadAlt';
import Linkedin from 'binary-ui-icons/binary/Linkedin';
import LinkedinAlt from 'binary-ui-icons/binary/LinkedinAlt';
import List from 'binary-ui-icons/binary/List';
import ListView from 'binary-ui-icons/binary/ListView';
import Location from 'binary-ui-icons/binary/Location';
import LocationAlt from 'binary-ui-icons/binary/LocationAlt';
import Locked from 'binary-ui-icons/binary/Locked';
import LockedAlt from 'binary-ui-icons/binary/LockedAlt';
import Logout from 'binary-ui-icons/binary/Logout';
import Medium from 'binary-ui-icons/binary/Medium';
import Microsoft from 'binary-ui-icons/binary/Microsoft';
import Minus from 'binary-ui-icons/binary/Minus';
import MinusAlt from 'binary-ui-icons/binary/MinusAlt';
import More from 'binary-ui-icons/binary/More';
import MoreAlt from 'binary-ui-icons/binary/MoreAlt';
import Naver from 'binary-ui-icons/binary/Naver';
import New from 'binary-ui-icons/binary/New';
import NewAlt from 'binary-ui-icons/binary/NewAlt';
import Open from 'binary-ui-icons/binary/Open';
import Organization from 'binary-ui-icons/binary/Organization';
import OrganizationDisconnected from 'binary-ui-icons/binary/OrganizationDisconnected';
import QuestionAlt from 'binary-ui-icons/binary/QuestionAlt';
import Redhat from 'binary-ui-icons/binary/Redhat';
import ResetSetting from 'binary-ui-icons/binary/ResetSetting';
import Remove from 'binary-ui-icons/binary/Remove';
import RoomBooking from 'binary-ui-icons/binary/RoomBooking';
import RotateLeft from 'binary-ui-icons/binary/RotateLeft';
import RotateRight from 'binary-ui-icons/binary/RotateRight';
import Save from 'binary-ui-icons/binary/Save';
import Scan from 'binary-ui-icons/binary/Scan';
import ScanAlt from 'binary-ui-icons/binary/ScanAlt';
import Search from 'binary-ui-icons/binary/Search';
import Send from 'binary-ui-icons/binary/Send';
import SendAlt from 'binary-ui-icons/binary/SendAlt';
import Settings from 'binary-ui-icons/binary/Settings';
import SettingsAlt from 'binary-ui-icons/binary/SettingsAlt';
import Share from 'binary-ui-icons/binary/Share';
import ShareAlt from 'binary-ui-icons/binary/ShareAlt';
import Skype from 'binary-ui-icons/binary/Skype';
import SmartLock from 'binary-ui-icons/binary/SmartLock';
import Stack from 'binary-ui-icons/binary/Stack';
import StackFull from 'binary-ui-icons/binary/StackFull';
import StackNew from 'binary-ui-icons/binary/StackNew';
import StackUnavailable from 'binary-ui-icons/binary/StackUnavailable';
import StackUnavailableAlt from 'binary-ui-icons/binary/StackUnavailableAlt';
import Statistics from 'binary-ui-icons/binary/Statistics';
import Store from 'binary-ui-icons/binary/Store';
import StoreAlt from 'binary-ui-icons/binary/StoreAlt';
import PhoneCard from 'binary-ui-icons/binary/PhoneCard';
import Telegram from 'binary-ui-icons/binary/Telegram';
import Text from 'binary-ui-icons/binary/Text';
import TextAlt from 'binary-ui-icons/binary/TextAlt';
import Time from 'binary-ui-icons/binary/Time';
import Translation from 'binary-ui-icons/binary/Translation';
import Triangle from 'binary-ui-icons/binary/Triangle';
import Twitter from 'binary-ui-icons/binary/Twitter';
import Ubuntu from 'binary-ui-icons/binary/Ubuntu';
import Uncheck from 'binary-ui-icons/binary/Uncheck';
import Update from 'binary-ui-icons/binary/Update';
import User from 'binary-ui-icons/binary/User';
import UserAlt from 'binary-ui-icons/binary/UserAlt';
import UserInvite from 'binary-ui-icons/binary/UserInvite';
import Viber from 'binary-ui-icons/binary/Viber';
import Warning from 'binary-ui-icons/binary/Warning';
import Whatsapp from 'binary-ui-icons/binary/Whatsapp';
import WhatsappAlt from 'binary-ui-icons/binary/WhatsappAlt';
import Yahoo from 'binary-ui-icons/binary/Yahoo';
import Youtube from 'binary-ui-icons/binary/Youtube';

const COLOR = '#000000';
const SIZE = 50;

storiesOf('binary-ui-icons/binary', module)
  .add('General', () =>
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
      <Add color={COLOR} size={SIZE} onPress={action('clicked')} />
      <AddCard color={COLOR} size={SIZE} onPress={action('clicked')} />
      <AddEmoji color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Approval color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowDown color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowLeft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowRight color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ArrowUp color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Autoconnect color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Call color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CallAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CalendarView color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CameraAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Cancel color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Card color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CardAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CardBroken color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Check color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CheckAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Circle color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Copy color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Delete color={COLOR} size={SIZE} onPress={action('clicked')} />
      <DeleteCharacter color={COLOR} size={SIZE} onPress={action('clicked')} />
      <DeleteAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Deleted color={COLOR} size={SIZE} onPress={action('clicked')} />
      <DeletedAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Done color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Drawer color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Event color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Favorites color={COLOR} size={SIZE} onPress={action('clicked')} />
      <FavoritesAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Info color={COLOR} size={SIZE} onPress={action('clicked')} />
      <InfoAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Keypad color={COLOR} size={SIZE} onPress={action('clicked')} />
      <KeypadAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <List color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ListView color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Location color={COLOR} size={SIZE} onPress={action('clicked')} />
      <LocationAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Locked color={COLOR} size={SIZE} onPress={action('clicked')} />
      <LockedAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Logout color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Minus color={COLOR} size={SIZE} onPress={action('clicked')} />
      <MinusAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <More color={COLOR} size={SIZE} onPress={action('clicked')} />
      <MoreAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <New color={COLOR} size={SIZE} onPress={action('clicked')} />
      <NewAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Open color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Organization color={COLOR} size={SIZE} onPress={action('clicked')} />
      <OrganizationDisconnected color={COLOR} size={SIZE} onPress={action('clicked')} />
      <QuestionAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Remove color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ResetSetting color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RoomBooking color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RotateLeft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <RotateRight color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Save color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Scan color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ScanAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Search color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Send color={COLOR} size={SIZE} onPress={action('clicked')} />
      <SendAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Settings color={COLOR} size={SIZE} onPress={action('clicked')} />
      <SettingsAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Share color={COLOR} size={SIZE} onPress={action('clicked')} />
      <ShareAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <SmartLock color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Stack color={COLOR} size={SIZE} onPress={action('clicked')} />
      <StackFull color={COLOR} size={SIZE} onPress={action('clicked')} />
      <StackNew color={COLOR} size={SIZE} onPress={action('clicked')} />
      <StackUnavailable color={COLOR} size={SIZE} onPress={action('clicked')} />
      <StackUnavailableAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Statistics color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Store color={COLOR} size={SIZE} onPress={action('clicked')} />
      <StoreAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <PhoneCard color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Text color={COLOR} size={SIZE} onPress={action('clicked')} />
      <TextAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Time color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Translation color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Triangle color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Uncheck color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Update color={COLOR} size={SIZE} onPress={action('clicked')} />
      <User color={COLOR} size={SIZE} onPress={action('clicked')} />
      <UserAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <UserInvite color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Warning color={COLOR} size={SIZE} onPress={action('clicked')} />
    </View>
  )
.add('Logotypes', () =>
    <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
      <Apple color={COLOR} size={SIZE} onPress={action('clicked')} />
      <AppleAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Behance color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Cards color={COLOR} size={SIZE} onPress={action('clicked')} />
      <CardsAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Designer color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Facebook color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Facetime color={COLOR} size={SIZE} onPress={action('clicked')} />
      <FacetimeAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Google color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Github color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Instagram color={COLOR} size={SIZE} onPress={action('clicked')} />
      <InstagramAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <KakaoPlus color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Kakaotalk color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Linkedin color={COLOR} size={SIZE} onPress={action('clicked')} />
      <LinkedinAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Medium color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Microsoft color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Naver color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Redhat color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Skype color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Telegram color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Twitter color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Ubuntu color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Viber color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Whatsapp color={COLOR} size={SIZE} onPress={action('clicked')} />
      <WhatsappAlt color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Yahoo color={COLOR} size={SIZE} onPress={action('clicked')} />
      <Youtube color={COLOR} size={SIZE} onPress={action('clicked')} />
    </View>
  );
