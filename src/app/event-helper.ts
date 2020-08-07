import { EventInput, EventOutput } from './event';

export const layOutDay = (input: EventInput[]): EventOutput[] => {

  const result = [];
  for (let i = 0; i < 12; i++){
    result[i] = [];
  }

  input.forEach( element => {
    const index = Math.floor(element.start / 60);
    result[index].push({
      name: 'Sample Event',
      location: 'Sample Location',
      duration: element.end - element.start,
      start: element.start,
      end: element.end
    });
  });

  return result;
};
