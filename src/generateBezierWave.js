export const generateBezierWave = params => {
  let path = `M 0 ${params.height / 2}`;
  const steps = Math.floor(params.width / params.waveLength);

  for (let i = 0; i < steps; i++) {
    const x1 = i * params.waveLength;
    const x2 = x1 + params.waveLength / 2;
    const x3 = x1 + params.waveLength;
    const y1 = params.height / 2;
    const y2 = y1 + params.amplitude * Math.sin(2 * Math.PI * i + params.phase);
    const y3 = params.height / 2;

    path += ` C ${x1 + params.waveLength / 4} ${y1}, ${
      x2 - params.waveLength / 4
    } ${y2}, ${x2} ${y2}`;
    path += ` C ${x2 + params.waveLength / 4} ${y2}, ${
      x3 - params.waveLength / 4
    } ${y3}, ${x3} ${y3}`;
  }
  return path;
};