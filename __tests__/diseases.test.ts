import {diseases} from '../src/data/diseases';

describe('disease reference data', () => {
  it('has unique names', () => {
    const names = diseases.map(d => d.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it('fills every field for each disease', () => {
    for (const disease of diseases) {
      expect(disease.pathogen.length).toBeGreaterThan(0);
      expect(disease.symptoms.length).toBeGreaterThan(20);
      expect(disease.management.length).toBeGreaterThan(20);
      expect(['Fungal', 'Bacterial', 'Viral']).toContain(disease.type);
    }
  });
});
