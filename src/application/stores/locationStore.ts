import { makeAutoObservable } from "mobx";
import { LocationData } from "../components/types/types";
import formStore from "./formStore";

class LocationStore {
  selectedCountry = "";
  selectedCity = "";
  locationData: LocationData = {
    Albania: {
      Tirana: "139",
    },
    Algeria: {
      Algeria: "383",
    },
    Angola: {
      Lobito: "392",
      Luanda: "307",
      Mosamedish: "393",
      Soyo: "394",
    },
    Argentina: {
      "Buenos Aires": "214",
    },
    Armenia: {
      Agarak: "174",
      Stepanakert: "80",
      Yerevan: "9",
    },
    Australia: {
      Adelaide: "260",
      Brisbane: "258",
      "Gold Coast": "259",
      Melbourne: "257",
      Sydney: "256",
    },
    Austria: {
      Vienna: "181",
    },
    Azerbaijan: {
      Baku: "77",
    },
    Bahrain: {
      Manama: "55",
    },
    Belgium: {
      Antwerp: "143",
      Brussels: "94",
    },
    Benin: {
      Cotonou: "325",
    },
    Brazil: {
      Brasilia: "295",
      Fortaleza: "297",
      "Rio de Janeiro": "294",
      Salvador: "296",
      "Sao Paulo": "293",
    },
    Bulgaria: {
      Burgas: "350",
      Sofia: "191",
      Varna: "198",
    },
    "Burkina Faso": {
      "Bobo-Dioulasso": "339",
      Ouagadougou: "338",
    },
    Cameroon: {
      Duala: "315",
      Yaounde: "314",
    },
    Canada: {
      Calgary: "238",
      Edmonton: "343",
      Montreal: "236",
      Ottawa: "345",
      Quebec: "237",
      Toronto: "235",
      Vancouver: "344",
    },
    China: {
      Beijing: "58",
      Changchun: "416",
      Chengdu: "412",
      Chongqing: "410",
      Guangzhou: "59",
      Harbin: "414",
      "Hong Kong": "78",
      Macau: "402",
      Nanjing: "415",
      Shanghai: "411",
      Shenzhen: "301",
      Tianjin: "413",
    },
    Colombia: {
      Bogota: "211",
      Medellin: "212",
    },
    Congo: {
      Brazzaville: "316",
      Kinshasa: "317",
      "Pointe Noire": "398",
    },
    "Costa Rica": {
      "San Jose": "274",
    },
    "Cote D'Ivoire": {
      Abidjan: "308",
    },
    Croatia: {
      Zagreb: "279",
    },
    Cyprus: {
      Larnaca: "131",
      Limassol: "130",
      Nicosia: "275",
      Paphos: "129",
    },
    "Czech Republic": {
      Brno: "359",
      "Karlovy Vary": "360",
      Prague: "83",
    },
    Denmark: {
      Copenhagen: "140",
    },
    Djibouti: {
      Djibouti: "369",
    },
    "Dominican Republic": {
      Santiago: "154",
      "Santo Domingo": "155",
    },
    Ecuador: {
      Guayaquil: "153",
      Quito: "187",
    },
    Egypt: {
      Alexandria: "284",
      Cairo: "283",
      Hurghada: "430",
      "Sharm El Sheikh": "431",
    },
    "Equatorial Guinea": {
      Bata: "395",
      Malabo: "396",
    },
    Eritrea: {
      Asmara: "373",
      Assab: "371",
      Massawa: "372",
    },
    Estonia: {
      Tallinn: "79",
    },
    Ethiopia: {
      "Addis Ababa": "327",
    },
    Finland: {
      Helsinki: "291",
    },
    France: {
      Cannes: "228",
      Lyon: "230",
      Marseille: "229",
      Nice: "145",
      Paris: "90",
    },
    Gabon: {
      Libreville: "328",
      "Port-Gentil": "397",
    },
    Gambia: {
      Banjul: "309",
    },
    Georgia: {
      Batumi: "158",
      Rustavi: "206",
      Tbilisi: "52",
    },
    Germany: {
      Berlin: "86",
      Bremen: "354",
      Cologne: "222",
      Dortmund: "224",
      Dresden: "84",
      Dusseldorf: "223",
      Essen: "352",
      Frankfurt: "87",
      Hamburg: "141",
      Hanover: "342",
      Leipzig: "142",
      Munich: "85",
      Nuremberg: "355",
      Stuttgart: "353",
    },
    Ghana: {
      Accra: "310",
      Kumasi: "311",
      "Sekondi-Takoradi": "378",
      Tema: "312",
    },
    Greece: {
      Athens: "177",
      Thessaloniki: "282",
    },
    Guinea: {
      Conakry: "313",
    },
    "Guinea-Bissau": {
      Bissau: "379",
    },
    Hungary: {
      Budapest: "178",
    },
    India: {
      Bangalore: "407",
      Calcutta: "409",
      Chennai: "408",
      Delhi: "406",
      Mumbai: "405",
    },
    Indonesia: {
      Bali: "249",
    },
    Ireland: {
      Dublin: "209",
    },
    Italy: {
      Catania: "233",
      Florence: "358",
      Milan: "88",
      Naples: "232",
      Palermo: "234",
      Parma: "357",
      Rimini: "231",
      Rome: "146",
    },
    Japan: {
      Kyoto: "423",
      Osaka: "424",
      Tokyo: "306",
      Toyama: "421",
      Yokohama: "422",
    },
    Kazakhstan: {
      Aktobe: "125",
      Almaty: "123",
      Astana: "19",
      Ekibastuz: "41",
      Karaganda: "126",
      Kostanay: "5",
      Shymkent: "124",
    },
    Kenya: {
      Mombasa: "331",
      Nairobi: "330",
    },
    Korea: {
      Ansan: "404",
      Incheon: "403",
      Seoul: "269",
    },
    Kyrgyzstan: {
      Bishkek: "170",
    },
    Latvia: {
      Riga: "48",
    },
    Lebanon: {
      Beirut: "285",
    },
    Liberia: {
      Monrovia: "332",
    },
    Libya: {
      "Al-Khums": "384",
      Benghazi: "385",
      Misrata: "386",
      Tripoli: "134",
    },
    Lithuania: {
      Kaunas: "221",
      Marijampole: "348",
      Panevezys: "349",
      Vilnius: "96",
    },
    Luxembourg: {
      Luxembourg: "290",
    },
    Macedonia: {
      Skopje: "281",
    },
    Madagascar: {
      Toamasina: "370",
    },
    Malaysia: {
      "Kuala Lumpur": "340",
    },
    Malta: {
      Valletta: "280",
    },
    Mauritania: {
      Nouadhibou: "381",
      Nouakchott: "382",
    },
    Mexico: {
      "Mexico City": "156",
    },
    Moldova: {
      Kishinev: "51",
      Tiraspol: "179",
    },
    Monaco: {
      Monaco: "160",
    },
    Montenegro: {
      Bar: "277",
      Budva: "162",
      Podgorica: "225",
      Tivat: "347",
    },
    Morocco: {
      Casablanca: "391",
      Nador: "389",
      Rabat: "387",
      Tangier: "390",
    },
    Mozambique: {
      Beira: "374",
      Maputo: "375",
      Nacala: "376",
    },
    Namibia: {
      "Walvis Bay": "399",
    },
    Netherlands: {
      Amsterdam: "89",
      Rotterdam: "144",
      Utrecht: "261",
    },
    Niger: {
      Niamey: "326",
    },
    Nigeria: {
      Abuja: "319",
      Kano: "320",
      Lagos: "318",
      Onne: "380",
    },
    Norway: {
      Oslo: "93",
    },
    Panama: {
      Panama: "210",
    },
    Peru: {
      Lima: "213",
    },
    Poland: {
      Gdansk: "193",
      Krakow: "194",
      Lodz: "216",
      Lublin: "363",
      Poznan: "341",
      Przemysl: "215",
      Rzeszow: "361",
      Szczecin: "362",
      Warsaw: "95",
      Wroclaw: "192",
    },
    Portugal: {
      Cascais: "346",
      Faro: "292",
      Funchal: "205",
      Lisbon: "204",
      Porto: "203",
    },
    Qatar: {
      Doha: "287",
    },
    Romania: {
      Bucharest: "195",
      Constanta: "217",
    },
    Rwanda: {
      Kigali: "333",
    },
    "Saudi Arabia": {
      Jeddah: "286",
    },
    Senegal: {
      Dakar: "322",
    },
    Serbia: {
      Belgrade: "271",
      Nish: "273",
      "Novi Sad": "272",
    },
    "Sierra Leone": {
      Freetown: "334",
    },
    Singapore: {
      Singapore: "288",
    },
    Slovakia: {
      Bratislava: "180",
      Kosice: "182",
    },
    Slovenia: {
      Ljubljana: "289",
    },
    Somalia: {
      Mogadishu: "321",
    },
    "South Africa": {
      "Cape Town": "400",
      Durban: "401",
      Johannesburg: "329",
    },
    Spain: {
      Alicante: "227",
      Barcelona: "91",
      Benidorm: "351",
      Ibiza: "303",
      Madrid: "148",
      Malaga: "149",
      Mallorca: "304",
      Marbella: "218",
      Murcia: "241",
      Seville: "226",
    },
    Sweden: {
      Stockholm: "92",
    },
    Switzerland: {
      Basel: "428",
      Berne: "427",
      Geneva: "219",
      Lausanne: "368",
      Lucerne: "426",
      Lugano: "367",
      Montreux: "425",
      Zurich: "220",
    },
    Tajikistan: {
      Dushanbe: "278",
    },
    Tanzania: {
      "Dar es Salaam": "335",
    },
    Thailand: {
      Bangkok: "251",
      Chang: "254",
      Krabi: "255",
      Pattaya: "250",
      "Pha-ngan": "253",
      Phuket: "248",
      Samui: "252",
    },
    Togo: {
      Lome: "323",
    },
    Tunisia: {
      Djerba: "132",
      Tunis: "133",
    },
    Turkey: {
      Alanya: "199",
      Ankara: "168",
      Antalya: "167",
      Belek: "201",
      Bodrum: "302",
      Bursa: "190",
      Gazipasa: "207",
      Istanbul: "54",
      Izmir: "189",
      Kemer: "200",
    },
    Uganda: {
      Kampala: "336",
    },
    "United Arab Emirates": {
      "Abu Dhabi": "300",
      Dubai: "56",
      "Ras Al Khaimah": "419",
      Sharjah: "418",
    },
    "United Kingdom": {
      Birmingham: "245",
      Liverpool: "243",
      London: "75",
      Manchester: "244",
    },
    Uzbekistan: {
      Tashkent: "82",
    },
    Vietnam: {
      "Da Nang": "432",
    },
    Zimbabwe: {
      Harare: "324",
    },
  };

  constructor() {
    makeAutoObservable(this);


    this.setCountry = this.setCountry.bind(this);
    this.setCity = this.setCity.bind(this);
  }

  setCountry(country: string) {
    this.selectedCountry = country;
    const cities = this.cityOptions;
    if (cities.length > 0) {
      this.setCity(cities[0]);
    }

    formStore.updateField("country", country);
  }

  setCity(city: string) {
    this.selectedCity = city; 
    formStore.updateField("city", city);
  }

  get cityOptions(): string[] {
    return this.selectedCountry && this.locationData[this.selectedCountry]
      ? Object.keys(this.locationData[this.selectedCountry])
      : [];
  }

  initializeDefaults = () => {
    const countries = Object.keys(this.locationData); 
    if (countries.length > 0) {
      this.setCountry(countries[0]); 
    }
  };
}

const locationStore = new LocationStore();
export default locationStore;
