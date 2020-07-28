import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';

import { clearProfile, fetchProfile } from '@/features/Account/profile';

const Profile = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation('account');

  // on more complex case, use reselect library
  const profile = useSelector(state => state.profile);

  useEffect(() => {
    dispatch(fetchProfile({ userName: 'JackyTung' }));

    return () => dispatch(clearProfile());
  }, []);

  const onChangeToEnglish = () => {
    i18n.changeLanguage('en-US');
  };

  const onChangeToChinese = () => {
    i18n.changeLanguage('zh-TW');
  };

  return (
    <>
      <Typography className="text-bold">{t('Profile.Title')}</Typography>
      <div className="d-flex align-center">
        <Typography variant="body1">{t('Profile.Name')}</Typography>
        <Typography variant="body2">{profile.name}</Typography>
      </div>

      <div className="d-flex align-center">
        <Typography variant="body1">{t('Profile.Email')}</Typography>
        <Typography variant="body2">{profile.email}</Typography>
      </div>

      <button onClick={onChangeToEnglish}>English</button>
      <button onClick={onChangeToChinese}>中文</button>
    </>
  );
};

export default Profile;
