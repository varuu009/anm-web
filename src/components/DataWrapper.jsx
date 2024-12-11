import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function DeviceUserData() {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSelector((state) => state.merchantData);

  useEffect(() => {
    // Make sure `data` and `data.eventCount` are available before processing
    if (data && data.eventCount) {
      const filtered = data.eventCount.filter(
        (event) =>
          event.event === "OTP" ||
          event.event === "LOGOUT" ||
          event.event === "APP_SWITCH" ||
          event.event === "LOGIN" ||
          event.event === "DEVICE_UNREGISTER" ||
          event.event === "DEVICE_REGISTRATION_SUCCESS" ||
          event.event === "ATTESTATION_MONITORING_REGISTER"
      );
      setFilteredData(filtered);
    }
  }, [data]);

  return filteredData;
}

export function TransactionData() {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSelector((state) => state.merchantData);

  useEffect(() => {
    // Make sure `data` and `data.eventCount` are available before processing
    if (data && data.eventCount) {
      const filtered = data.eventCount.filter(
        (event) =>
          event.event === "TXN_CANCELLED" ||
          event.event === "TXN_INITIATE" ||
          event.event === "TXN_PROCESS" ||
          event.event === "TXN_SUCCESS" ||
          event.event === "TXN_USER_CANCELED" ||
          event.event === "TXN_DECLINED"
      );
      setFilteredData(filtered);
    }
  }, [data]); // Only run the effect when `data` changes

  return filteredData;
}
export function PasswordData() {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSelector((state) => state.merchantData);

  useEffect(() => {
    // Make sure `data` and `data.eventCount` are available before processing
    if (data && data.eventCount) {
      const filtered = data.eventCount.filter(
        (event) =>
          event.event === "TXN_PIN_ENTRY" ||
          event.event === "TXN_PIN_ENTRY_FAILED" ||
          event.event === "TXN_PIN_ENTRY_SUCCESS"
      );
      setFilteredData(filtered);
    }
  }, [data]); // Only run the effect when `data` changes

  return filteredData;
}

export function SecurityInfo() {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSelector((state) => state.merchantData);

  useEffect(() => {
    // Make sure `data` and `data.eventCount` are available before processing
    if (data && data.eventCount) {
      const filtered = data.eventCount.filter(
        (event) =>
          event.event === "USB_DEBUG_ON" ||
          event.event === "USB_DEBUG_OFF" ||
          event.event === "ANDROID_VERSION_MISMATCH" ||
          event.event === "KERNEL_VERSION_MISMATCH" ||
          event.event === "Tampered" ||
          event.event === "APP_DEVELOPER_MODE_ON" ||
          event.event === "FRAUD" ||
          event.event === "USB_CHARGING" ||
          event.event === "DEVICE_ROOTED" ||
          event.event === "APP_DEVELOPER_MODE_OFF"
      );
      setFilteredData(filtered);
    }
  }, [data]);

  return filteredData;
}
export function GeneralInfo() {
  const [filteredData, setFilteredData] = useState([]);
  const { data } = useSelector((state) => state.merchantData);

  useEffect(() => {
    // Make sure `data` and `data.eventCount` are available before processing
    if (data && data.eventCount) {
      const filtered = data.eventCount.filter(
        (event) =>
          event.event === "NETWORK_FAILURE" ||
          event.event === "NETWORK_DOWN_TIME" ||
          event.event === "OTP_ERROR" ||
          event.event === "CERTIFICATE_DOWNLOAD_FAILURE"
      );
      setFilteredData(filtered);
    }
  }, [data]);

  return filteredData;
}
