import { UiHeader } from '@soccer-polls/ui-header';
import { useEffect, useState } from 'react';
import { ApiResponse, API_URL } from '@soccer-polls/api-interface';

export default function Index() {
  const [message, setMessage] = useState<ApiResponse['message']>();

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setMessage(res.message));
  }, []);
  return <UiHeader message={message} />;
}
