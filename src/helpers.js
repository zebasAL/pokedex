/**
   * Gets porcentage value
   * @param {string} stat
   * @returns {number}
   */
const maxStat = (stat) => {
  if (stat.stat.name === 'hp') {
    return ((stat.base_stat * 100) / 255).toFixed();
  } if (stat.stat.name === 'attack') {
    return ((stat.base_stat * 100) / 190).toFixed();
  } if (stat.stat.name === 'defense') {
    return ((stat.base_stat * 100) / 230).toFixed();
  } if (stat.stat.name === 'special-attack') {
    return ((stat.base_stat * 100) / 194).toFixed();
  } if (stat.stat.name === 'special-defense') {
    return ((stat.base_stat * 100) / 230).toFixed();
  } if (stat.stat.name === 'speed') {
    return ((stat.base_stat * 100) / 180).toFixed();
  }
  return stat;
};

export default maxStat;
