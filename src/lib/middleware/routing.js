import { getSession } from "@/lib/api";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { USER_PERMISSIONS } from "./user-guard";

Array.prototype.last = function () {
  return this[this.length - 1];
};

function checkPermissions(action, resource) {
  const _resource = resource ?? useRouter()?.route?.split(`/`).last() ?? "";
  const role = getSession()?.user?.role?.type;
  return USER_PERMISSIONS[_resource]?.[action]?.includes(role) ?? false;
}

export function usePermissions(resource) {
  const [permissions, setPermissions] = useState({});

  useEffect(() => {
    setPermissions({
      view: checkPermissions("view", resource),
      create: checkPermissions("create", resource),
      update: checkPermissions("update", resource),
      delete: checkPermissions("delete", resource),
    });
    return () => {};
  }, [resource]);

  return permissions;
}
