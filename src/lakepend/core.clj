(ns lakepend.core
  (:require [lakepend.backend :as be])
  (:gen-class))

(def usage-string "Usage: Must supply two dates in MMM/dd/yyyy format or the single argument --sync")

(defn handle-query
  [start-str end-str]
  (let [invalid? (some nil? (map be/cal->ms [start-str end-str]))]
    (if invalid?
      (println (str "Invalid dates:\n"
                   start-str "\n" end-str "\n"
                   usage-string))
      (lakepend.backend/display-query-result start-str end-str))))

(defn -main
  [& args]
  (condp = (count args)
    0 (println usage-string)
    1 (if (= (first args) "--sync")
        (be/sync!)
        (println usage-string))
    2 (apply handle-query args)
    (println usage-string)))
