"use client";

import { motion } from "framer-motion";
import PageWrapper from "../../components/PageWrapper";
import { useTranslation } from "../../context/LanguageProvider";

export default function PexFoodPage() {
  const { t } = useTranslation();

  return (
    <PageWrapper>
      <div className="text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 text-indigo-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {t("pexFood")}
        </motion.h1>
        <motion.p
          className="text-xl text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {t("pexFoodDesc")}
        </motion.p>
      </div>
    </PageWrapper>
  );
}
