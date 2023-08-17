import SignIn from "@/components/SignIn/SignIn";
import SignUp from "@/components/SignUp/SignUp";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppContext } from "@/contexts/AppContext";

export default function Forms() {
  const [isSigningUp, setIsSigningUp] = useState(true);

  const switchForm = () => {
    setIsSigningUp(!isSigningUp);
  };

  return (
    <AppContext.Provider value={{ isSigningUp, switchForm }}>
      <div className="col-span-4 md:col-span-3 p-4 bg-white rounded-md py-12">
        <AnimatePresence mode="wait">
          {isSigningUp ? (
            <motion.div
              key="signUp"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <SignUp />
            </motion.div>
          ) : (
            <motion.div
              key="signIn"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <SignIn />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AppContext.Provider>
  );
}
