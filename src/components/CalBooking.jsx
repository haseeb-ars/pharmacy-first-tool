import React, { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';
import { DEFAULT_CAL_LINK } from '../calConfig';

const CalBooking = ({
  calLink = DEFAULT_CAL_LINK,
  name = '',
  email = '',
  service = '',
  style = {}
}) => {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal('ui', {
          styles: { branding: { brandColor: '#000000' } },
          hideEventTypeDetails: false,
          layout: 'month_view'
        });
      } catch (err) {
        console.error('Failed to initialize Cal API:', err);
      }
    })();
  }, []);

  // Handle missing/undefined values safely
  const safeName = typeof name === 'string' ? name.trim() : '';
  const safeEmail = typeof email === 'string' ? email.trim() : '';
  const safeService = typeof service === 'string' ? service.trim() : '';

  const configProps = {
    name: safeName,
    email: safeEmail,
    layout: 'month_view',
  };

  if (safeService) {
    // Pass non-sensitive reference (service name) via metadata
    configProps.metadata = { service: safeService };
  }

  return (
    <div
      className="cal-booking-container"
      style={{
        width: '100%',
        minHeight: '650px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'auto',
        ...style
      }}
    >
      <Cal
        calLink={calLink}
        style={{
          width: '100%',
          height: '100%',
          minHeight: '650px',
          border: 'none'
        }}
        config={configProps}
      />
    </div>
  );
};

export default CalBooking;
