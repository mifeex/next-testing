import { StaticImageData } from 'next/image';

import Secret from './images/artists/secret.webp';
import NoName from './images/artists/noname.webp';

import Argy from './images/artists/argy.webp';
import DaoDar from './images/artists/dao_dar.webp';
import DenisA from './images/artists/denis_a.webp';
import PacoOsuna from './images/artists/paco_osuna.webp';
import BorisBrejcha from './images/artists/boris_brejcha.webp';
import CarlCox from './images/artists/carl_cox.webp';
import ChelinaManuhutu from './images/artists/chelina_manuhutu.webp';
import DeborahDeLuca from './images/artists/deborah_de_luca.webp';
import FatimaHajji from './images/artists/fatima_hajji.webp';
import GuyJ from './images/artists/guy_j.webp';
import HenricSchwarz from './images/artists/henric_schwarz.webp';
import JamieJones from './images/artists/jamie_jones.webp';
import Matador from './images/artists/matador.webp';
import NickWarren from './images/artists/nick_warren.webp';
import SashaJohnDigweed from './images/artists/sasha_digweed.webp';
import SvenVath from './images/artists/sven_vath.webp';
import PaulKalkbrenner from './images/artists/paul_kalkbrenner.webp';
import GiorgiaAngiuli from './images/artists/giorgia_angiuli.webp';
import Goncalo from './images/artists/goncalo.webp';
import Squire from './images/artists/squire.webp';
import DrunkenKong from './images/artists/drunken_kong.webp';
import ChristianSmith from './images/artists/christian_smith.webp';
import MarwanSabb from './images/artists/marwan_sabb.webp';
import Lopezhouse from './images/artists/lopezhouse.webp';
import MarcoBailey from './images/artists/marco_bailey.webp';
import Gabriel from './images/artists/gabriel.webp';
import FranciscoAllendes from './images/artists/francisco_allendes.webp';
import WhoMadeWho from './images/artists/who_made_who.webp';
import Rehk from './images/artists/rehk.webp';
import GuyGerber from './images/artists/guy_gerber.webp';
import Blondish from './images/artists/blondish.webp';
import NicFanciulli from './images/artists/nic_fanciulli.webp';
import Hvob from './images/artists/hvob.webp';
import KostaKritikos from './images/artists/kosta_kritikos.webp';
import GuyMantzur from './images/artists/guy_mantzur.webp';
import RichyAhmed from './images/artists/richy_ahmed.webp';
import TaniaVulcano from './images/artists/tania_vulcano.webp';

export type LineupCard = {
  id: string;
  name: string;
  surname?: string;
  live?: boolean;
  location: 'main stage' | 'organic stage';
  date: string;
  time?: string;
  festivalClosed?: string;
  imgSrc: StaticImageData;
};

type SecretArtistGenerator = (date: string) => LineupCard;

export const secretArtist: SecretArtistGenerator = (date: string) => ({
  id: 'secret' + Math.random(),
  name: 'Secret artist',
  location: 'main stage',
  date,
  imgSrc: Secret,
});

const lineupData: LineupCard[] = [
  {
    id: 'alekkos_b2b_motif',
    name: 'Alekkos b2b',
    surname: 'Motif',
    location: 'organic stage',
    date: '2022/09/30',
    time: '18:00',
    imgSrc: NoName,
  },
  {
    id: 'argy',
    name: 'Argy',
    location: 'main stage',
    date: '2022/09/25',
    time: '19:00',
    imgSrc: Argy,
  },
  {
    id: 'astral_base',
    name: 'Astral',
    surname: 'Base',
    location: 'organic stage',
    date: '2022/09/25',
    imgSrc: NoName,
  },
  {
    id: 'dao_dar',
    name: 'Dao',
    surname: 'Dar',
    location: 'organic stage',
    date: '2022/09/23',
    imgSrc: DaoDar,
  },
  {
    id: 'dao_dar',
    name: 'Dao',
    surname: 'Dar',
    location: 'organic stage',
    date: '2022/09/25',
    imgSrc: DaoDar,
  },
  {
    id: 'dao_dar',
    name: 'Dao',
    surname: 'Dar',
    location: 'main stage',
    date: '2022/09/30',
    time: '20:00',
    imgSrc: DaoDar,
  },
  {
    id: 'denis_a',
    name: 'Denis A',
    location: 'main stage',
    date: '2022/09/23',
    time: '04:00',
    festivalClosed: '06:00',
    imgSrc: DenisA,
  },
  {
    id: 'denis_a',
    name: 'Denis A',
    location: 'organic stage',
    date: '2022/09/24',
    time: '04:00',
    imgSrc: DenisA,
  },
  {
    id: 'paco_osuna',
    name: 'Paco ',
    surname: 'Osuna',
    location: 'main stage',
    date: '2022/10/02',
    time: '22:30',
    festivalClosed: '00:00',
    imgSrc: PacoOsuna,
  },
  {
    id: 'boris_brejcha',
    name: 'Boris',
    surname: 'Brejcha',
    location: 'main stage',
    date: '2022/09/24',
    time: '01:30',
    imgSrc: BorisBrejcha,
  },
  {
    id: 'blondish',
    name: 'Blond:Ish',
    location: 'main stage',
    date: '2022/09/25',
    time: '21:30',
    imgSrc: Blondish,
  },
  {
    id: 'billy_d',
    name: 'Billy D',
    location: 'organic stage',
    date: '2022/09/23',
    imgSrc: NoName,
  },
  {
    id: 'carl_cox',
    name: 'Carl',
    surname: 'Cox',
    location: 'main stage',
    date: '2022/09/23',
    time: '02:00',
    imgSrc: CarlCox,
  },
  {
    id: 'chelina_manuhutu',
    name: 'Chelina',
    surname: 'Manuhutu',
    location: 'main stage',
    date: '2022/09/24',
    time: '04:30',
    festivalClosed: '06:00',
    imgSrc: ChelinaManuhutu,
  },
  {
    id: 'christian_smith',
    name: 'Christian',
    surname: 'Smith',
    location: 'organic stage',
    date: '2022/09/24',
    // time: '00:00',
    imgSrc: ChristianSmith,
  },
  {
    id: 'deborah_de_luca',
    name: 'Deborah',
    surname: 'De Luca',
    location: 'main stage',
    date: '2022/09/30',
    time: '02:00',
    imgSrc: DeborahDeLuca,
  },
  {
    id: 'drunken_kong',
    name: 'Drunken',
    surname: 'Kong',
    location: 'organic stage',
    date: '2022/10/01',
    imgSrc: DrunkenKong,
  },
  {
    id: 'echonomist',
    name: 'Echonomist',
    location: 'organic stage',
    date: '2022/10/02',
    time: '20:00',
    imgSrc: NoName,
  },
  {
    id: 'fatima_hajji',
    name: 'Fatima',
    surname: 'Hajji',
    location: 'main stage',
    date: '2022/09/30',
    time: '03:30',
    festivalClosed: '05:00',
    imgSrc: FatimaHajji,
  },
  {
    id: 'francisco_allendes',
    name: 'Francisco',
    surname: 'Allendes',
    location: 'main stage',
    date: '2022/09/23',
    time: '21:00',
    imgSrc: FranciscoAllendes,
  },
  {
    id: 'gabriel',
    name: 'Gabriel',
    location: 'organic stage',
    date: '2022/09/30',
    time: '03:30',
    imgSrc: Gabriel,
  },
  {
    id: 'gabriel',
    name: 'Gabriel',
    location: 'organic stage',
    date: '2022/10/01',
    imgSrc: Gabriel,
  },
  {
    id: 'giorgia_angiuli',
    name: 'Giorgia',
    surname: 'Angiuli',
    live: true,
    location: 'main stage',
    date: '2022/09/23',
    time: '23:00',
    imgSrc: GiorgiaAngiuli,
  },
  {
    id: 'gonçalo',
    name: 'Gonçalo',
    location: 'main stage',
    date: '2022/09/24',
    time: '03:00',
    imgSrc: Goncalo,
  },
  {
    id: 'guy_j',
    name: 'Guy J',
    location: 'main stage',
    date: '2022/10/01',
    time: '00:00',
    imgSrc: GuyJ,
  },
  {
    id: 'guy_mantzur',
    name: 'Guy',
    surname: 'Mantzur',
    location: 'main stage',
    date: '2022/09/24',
    time: '22:30',
    imgSrc: GuyMantzur,
  },
  {
    id: 'guy_gerber',
    name: 'Guy',
    surname: 'Gerber',
    location: 'main stage',
    date: '2022/09/24',
    time: '00:00',
    imgSrc: GuyGerber,
  },
  {
    id: 'henric_schwarz',
    name: 'Henrik',
    surname: 'Schwarz',
    live: true,
    location: 'main stage',
    date: '2022/09/25',
    time: '23:00',
    festivalClosed: '00:00',
    imgSrc: HenricSchwarz,
  },
  {
    id: 'homeshell',
    name: 'Homeshell',
    location: 'organic stage',
    date: '2022/09/25',
    time: '01:00',
    imgSrc: NoName,
  },
  {
    id: 'homeshell',
    name: 'Homeshell',
    location: 'organic stage',
    date: '2022/09/30',
    time: '01:00',
    imgSrc: NoName,
  },
  {
    id: 'jamie_jones',
    name: 'Jamie',
    surname: 'Jones',
    location: 'main stage',
    date: '2022/10/01',
    time: '03:00',
    festivalClosed: '05:00',
    imgSrc: JamieJones,
  },
  {
    id: 'jimmy_van_m',
    name: 'Jimmy',
    surname: 'Van M',
    location: 'organic stage',
    date: '2022/09/23',
    imgSrc: NoName,
  },
  {
    id: 'kenway',
    name: 'Kenway',
    location: 'organic stage',
    date: '2022/10/01',
    time: '22:00',
    imgSrc: NoName,
  },
  {
    id: 'kosta_kritikos',
    name: 'Kosta',
    surname: 'Kritikos',
    location: 'main stage',
    date: '2022/09/23',
    time: '20:00',
    imgSrc: KostaKritikos,
  },
  {
    id: 'kosta_kritikos',
    name: 'Kosta',
    surname: 'Kritikos',
    location: 'organic stage',
    date: '2022/09/25',
    time: '20:00',
    imgSrc: KostaKritikos,
  },
  {
    id: 'kosta_kritikos',
    name: 'Kosta',
    surname: 'Kritikos',
    location: 'main stage',
    date: '2022/10/01',
    time: '20:00',
    imgSrc: KostaKritikos,
  },
  {
    id: 'kosta_kritikos',
    name: 'Kosta',
    surname: 'Kritikos',
    location: 'organic stage',
    date: '2022/10/02',
    time: '20:30',
    imgSrc: KostaKritikos,
  },
  {
    id: 'lopezhouse',
    name: 'Lopezhouse',
    live: true,
    location: 'organic stage',
    date: '2022/09/24',
    imgSrc: Lopezhouse,
  },
  {
    id: 'matador',
    name: 'Matador',
    location: 'main stage',
    date: '2022/09/23',
    time: '00:00',
    imgSrc: Matador,
  },
  {
    id: 'marco_bailey',
    name: 'Marco',
    surname: 'Bailey',
    location: 'organic stage',
    date: '2022/09/23',
    imgSrc: MarcoBailey,
  },
  {
    id: 'manic_maik',
    name: 'Manic',
    surname: 'Maik',
    location: 'organic stage',
    date: '2022/09/23',
    imgSrc: NoName,
  },
  {
    id: 'marwan_sabb',
    name: 'Marwan',
    surname: 'Sabb',
    location: 'organic stage',
    date: '2022/09/24',
    imgSrc: MarwanSabb,
  },
  {
    id: 'memo',
    name: 'Memo',
    location: 'organic stage',
    date: '2022/09/25',
    imgSrc: NoName,
  },
  {
    id: 'moblack',
    name: 'Moblack',
    location: 'organic stage',
    date: '2022/09/24',
    time: '18:00',
    imgSrc: NoName,
  },
  {
    id: 'moblack',
    name: 'Moblack',
    location: 'main stage',
    date: '2022/09/25',
    time: '18:00',
    imgSrc: NoName,
  },
  {
    id: 'moses',
    name: 'Moses',
    location: 'main stage',
    date: '2022/09/24',
    time: '19:00',
    imgSrc: NoName,
  },
  {
    id: 'nasser_alazzawi',
    name: 'Nasser',
    surname: 'Alazzawi',
    location: 'organic stage',
    date: '2022/09/25',
    imgSrc: NoName,
  },
  {
    id: 'nic_fanciulli',
    name: 'Nic',
    surname: 'Fanciulli',
    location: 'main stage',
    date: '2022/10/02',
    time: '21:00',
    imgSrc: NicFanciulli,
  },
  {
    id: 'nick_warren',
    name: 'Nick',
    surname: 'Warren',
    location: 'main stage',
    date: '2022/10/01',
    time: '22:30',
    imgSrc: NickWarren,
  },
  {
    id: 'niksu',
    name: 'Niksu',
    location: 'organic stage',
    date: '2022/09/25',
    time: '18:00',
    imgSrc: NoName,
  },
  {
    id: 'niksu',
    name: 'Niksu',
    location: 'main stage',
    date: '2022/10/02',
    time: '18:00',
    imgSrc: NoName,
  },
  {
    id: 'paul_kalkbrenner',
    name: 'Paul',
    surname: 'Kalkbrenner',
    live: true,
    location: 'main stage',
    date: '2022/09/30',
    time: '00:30',
    imgSrc: PaulKalkbrenner,
  },
  {
    id: 'plasmatik',
    name: 'Plasmatik',
    location: 'organic stage',
    date: '2022/09/30',
    time: '00:00',
    imgSrc: NoName,
  },
  {
    id: 'philipp_straub',
    name: 'Philipp',
    surname: 'Straub',
    location: 'organic stage',
    date: '2022/09/23',
    time: '00:00',
    imgSrc: NoName,
  },

  {
    id: 'raif',
    name: 'Raif',
    location: 'organic stage',
    date: '2022/10/01',
    time: '20:00',
    imgSrc: NoName,
  },
  {
    id: 'rehk',
    name: 'Rehk',
    location: 'main stage',
    date: '2022/09/24',
    time: '20:00',
    imgSrc: Rehk,
  },
  {
    id: 'richy_ahmed',
    name: 'Richy',
    surname: 'Ahmed',
    location: 'main stage',
    date: '2022/10/01',
    time: '01:30',
    imgSrc: RichyAhmed,
  },
  {
    id: 'ruhu',
    name: 'Ruhu',
    location: 'organic stage',
    date: '2022/10/02',
    time: '01:00',
    imgSrc: NoName,
  },
  {
    id: 'ruhu',
    name: 'Ruhu',
    location: 'organic stage',
    date: '2022/09/30',
    time: '01:00',
    imgSrc: NoName,
  },
  {
    id: 'sasha_john_digweed',
    name: 'Sasha',
    surname: 'John Digweed',
    location: 'main stage',
    date: '2022/09/30',
    time: '21:30',
    imgSrc: SashaJohnDigweed,
  },
  {
    id: 'socrates',
    name: 'Socrates',
    location: 'organic stage',
    date: '2022/09/24',
    imgSrc: NoName,
  },
  {
    id: 'sven_vath',
    name: 'Sven',
    surname: 'Väth',
    location: 'main stage',
    date: '2022/09/30',
    time: '23:00',
    imgSrc: SvenVath,
  },
  {
    id: 'squire',
    name: 'Squire',
    location: 'main stage',
    date: '2022/09/24',
    time: '21:00',
    imgSrc: Squire,
  },
  {
    id: 'talal',
    name: 'Talal',
    location: 'organic stage',
    date: '2022/09/30',
    time: '02:00',
    imgSrc: NoName,
  },
  {
    id: 'talal',
    name: 'Talal',
    location: 'organic stage',
    date: '2022/10/01',
    time: '00:00',
    imgSrc: NoName,
  },
  {
    id: 'talal',
    name: 'Talal',
    location: 'organic stage',
    date: '2022/10/02',
    time: '00:00',
    imgSrc: NoName,
  },
  {
    id: 'tania_vulcano',
    name: 'Tania',
    surname: 'Vulcano',
    location: 'main stage',
    date: '2022/10/01',
    time: '21:00',
    imgSrc: TaniaVulcano,
  },
  {
    id: 'tom_tsamis',
    name: 'Tom',
    surname: 'Tsamis',
    location: 'organic stage',
    date: '2022/10/01',
    time: '00:00',
    imgSrc: NoName,
  },
  {
    id: 'who_made_who',
    name: 'Who Made Who',
    live: true,
    location: 'main stage',
    date: '2022/09/25',
    time: '20:30',
    imgSrc: WhoMadeWho,
  },
  {
    id: 'hvob',
    name: 'HVOB live',
    surname: '(clubset)',
    location: 'main stage',
    date: '2022/10/02',
    time: '19:30',
    imgSrc: Hvob,
  },
  {
    id: 'tania_vulcano',
    name: 'Tania',
    surname: 'Vulcano',
    location: 'main stage',
    date: '2022/10/01',
    imgSrc: TaniaVulcano,
  },
];

export default lineupData;
