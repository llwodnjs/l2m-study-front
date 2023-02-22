/**
 * PredicateUtil
 * 무언가를 받아 검사 후 결과를 반환하는 predicate 정의 모음.
 */


// string not empty/null/undefined predicate
export const isNotEmpty = (target: string | null | undefined) =>
  !!target && target.trim().length > 0;