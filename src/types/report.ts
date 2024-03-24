export interface Report {
	id: string;
	name: string;
	responsiblePerson: any; // Ответственное лицо
	assignedPerson: any; // Тот кому назначено
	deadline: Date; // Срко
	type: string; // Тип
	assignedDate: Date; // Дата когда был назначен
	status: string; // Статус
	completed: Date; // Дата когда сдано
	uploadAccepted: boolean; // Принудительная загрузка
}