import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Category } from "../backend.d";
import type { App } from "../backend.d";
import { useActor } from "./useActor";

export function useAllApps() {
  const { actor, isFetching } = useActor();
  return useQuery<App[]>({
    queryKey: ["apps", "all"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllApps();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useAppsByCategory(category: Category | null) {
  const { actor, isFetching } = useActor();
  return useQuery<App[]>({
    queryKey: ["apps", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (!category) return actor.getAllApps();
      return actor.getAppsByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useSeedAndLoad() {
  const { actor } = useActor();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => {
      if (!actor) return;
      await actor.seedSampleApps();
      const apps = await actor.getAllApps();
      queryClient.setQueryData(["apps", "all"], apps);
      return apps;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["apps"] });
    },
  });
}

export { Category };
export type { App };
