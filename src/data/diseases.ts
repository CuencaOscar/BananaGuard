export type DiseaseType = 'Fungal' | 'Bacterial' | 'Viral';

export type Disease = {
  name: string;
  pathogen: string;
  type: DiseaseType;
  symptoms: string;
  management: string;
};

/** Reference information on the main diseases that affect banana leaves and plants. */
export const diseases: Disease[] = [
  {
    name: 'Black Sigatoka',
    pathogen: 'Pseudocercospora fijiensis',
    type: 'Fungal',
    symptoms:
      'Small reddish-brown streaks on the underside of the leaf that grow into dark elongated spots with grey centres, drying large areas of the leaf.',
    management:
      'Remove infected leaves, improve drainage and spacing, and apply a rotated fungicide programme.',
  },
  {
    name: 'Yellow Sigatoka',
    pathogen: 'Pseudocercospora musae',
    type: 'Fungal',
    symptoms:
      'Pale yellow streaks parallel to the leaf veins that turn into brown spots with a yellow halo.',
    management:
      'Prune affected leaves, keep weeds under control and monitor humidity during the rainy season.',
  },
  {
    name: 'Fusarium wilt (Panama disease)',
    pathogen: 'Fusarium oxysporum f. sp. cubense',
    type: 'Fungal',
    symptoms:
      'Older leaves turn yellow from the margins and collapse around the pseudostem; the vascular tissue shows brown discolouration.',
    management:
      'Use clean planting material, disinfect tools and footwear, and avoid moving soil between farms.',
  },
  {
    name: 'Cordana leaf spot',
    pathogen: 'Neocordana musae',
    type: 'Fungal',
    symptoms:
      'Oval pale-brown spots with concentric rings and a yellow border, often along the leaf margin.',
    management:
      'Remove infected leaf tissue and reduce prolonged leaf wetness.',
  },
  {
    name: 'Bacterial wilt (Moko)',
    pathogen: 'Ralstonia solanacearum',
    type: 'Bacterial',
    symptoms:
      'Young leaves wilt and yellow, fruit rots internally and cut stems release a bacterial ooze.',
    management:
      'Eradicate infected plants, disinfect tools between plants and remove the male bud after fruit set.',
  },
  {
    name: 'Banana bunchy top',
    pathogen:
      'Banana bunchy top virus, spread by the aphid Pentalonia nigronervosa',
    type: 'Viral',
    symptoms:
      'Narrow, upright leaves bunched at the top of the plant with dark green dot-dash streaks along the veins.',
    management:
      'Destroy infected plants, control aphids and plant certified virus-free suckers.',
  },
];
