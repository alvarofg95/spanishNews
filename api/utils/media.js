export const MEDIA_LIST = [
  {
    name: 'ABC',
    nameKey: 'abc',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'El País',
    nameKey: 'el_pais',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: '20 Minutos',
    nameKey: '20_minutos',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'OK Diario',
    nameKey: 'ok_diario',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'Marca',
    nameKey: 'marca',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'AS',
    nameKey: 'as',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'La Razón',
    nameKey: 'la_razon',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  },
  {
    name: 'La Tribuna',
    nameKey: 'la_tribuna',
    sections: [
      {
        name: 'España',
        nameKey: 'espana',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Deportes',
        nameKey: 'deportes',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      },
      {
        name: 'Política',
        nameKey: 'politica',
        url: 'https://www.abc.es/rss/feeds/abc_EspanaEspana.xml'
      }
    ]
  }
];

export const extractImage = text => {
  const startIndex = text.indexOf('<img');
  const parsedText = text.substring(startIndex);
  const endIndex = parsedText.indexOf('>') + 1;
  const imgText = parsedText.substring(0, endIndex);
  const srcIndexStart = imgText.indexOf('src="');
  const srcIndexEnd = imgText.lastIndexOf('"');
  const result = imgText.substring(srcIndexStart + 5, srcIndexEnd);
  return result;
};
