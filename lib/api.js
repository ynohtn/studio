import Prismic from 'prismic-javascript'
import { Client } from './prismic-configuration'

// GET REFERENCES
export async function getReferences() {
  const references = await Client().query(
    Prismic.Predicates.at('document.type', 'reference')
  )

  return references
}

// GET SAMPLEPACKS
export async function getSamplePacks() {
  const samplePacks = await Client().query(
    Prismic.Predicates.at('document.type', 'sample_pack')
  )

  return samplePacks
}

/**
 * Get data for each reference
 * @param {Array} references
 * @returns {Array}
 */

export async function getReferenceData(references) {

  for (const { reference } of references) {
    const { data } = await Client().getByUID('reference', reference.uid)
    reference.artist_name = data.artist_name
    reference.track_name = data.track_name
    reference.cover = data.cover
  }

  return references
}

/**
 * Get data for each samplepack
 * @param {Array} samples
 * @returns {Array}
 */

export async function getSamplePackData(samples) {
  for (const { sample } of samples) {
    const { data } = await Client().getByUID('sample_pack', sample.uid)
    // project.image = data.sliderimage
  }
}