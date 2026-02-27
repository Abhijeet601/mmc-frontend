import i18next from "i18next";
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
const OnlinePaymentPolicy = () => {
  const {
    t
  } = useTranslation();
  return <>
      <Helmet>
        <title>{t('onlinePaymentPolicy.title', 'Online Payment Policy - Magadh Mahila College')}</title>
        <meta name="description" content={t('onlinePaymentPolicy.metaDescription', 'Online Payment Policy for Magadh Mahila College.')} />
      </Helmet>
      <div className="pt-0 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-primary mb-8">{i18next.t("auto.online_payment_policy_19c121c")}</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-gray-600">{i18next.t("auto.online_payment_policy_content_will_be_added_k8e7hw")}</p>
          </div>
        </div>
      </div>
    </>;
};
export default OnlinePaymentPolicy;
