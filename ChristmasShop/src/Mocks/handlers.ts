import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get(
    'http://localhost:5010/decorations',
    () => {
      // Note that you DON'T have to stringify the JSON!
      return HttpResponse.json({
    })
    }   
  ),
];
