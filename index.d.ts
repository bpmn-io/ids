declare class Ids {

  /**
   * Create a new id generator / cache instance.
   *
   * You may optionally provide a seed that is used internally.
   *
   * @param {Seed} [seed]
   */
  constructor(seed?: Seed);

  /**
   * Generate a next id.
   *
   * @param {Object} [element] element to bind the id to
   *
   * @return {string} id
   */
  public next(element?: any): ID;

  /**
   * Generate a next id with a given prefix.
   *
   * @param {Object} [element] element to bind the id to
   *
   * @return {string} id
   */
  public nextPrefixed(prefix: string, element?: any): ID;

  /**
   * Manually claim an existing id.
   *
   * @param {string} id
   * @param {any} [element] element the id is claimed by
   */
  public claim(id: ID, element?: any): void;

  /**
   * Returns true if the given id has already been assigned.
   *
   * @param  {string} id
   * @return {boolean}
   */
  public assigned(id: ID): boolean;

  /**
   * Unclaim an id.
   *
   * @param  {string} id the id to unclaim
   */
  public unclaim(id: ID): void;

  /**
   * Clear all claimed ids.
   */
  public clear(): void;
}

type Seed = [number, number] | [number, number, number];
type ID = string;

export {
  Ids,
  Seed,
  ID
}