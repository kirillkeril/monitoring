export interface Report {
	id: string;
	name: string;
	created_date: Date; // Дата создания
	responsiblePerson: any; // Ответственное лицо
	assignedPerson: any; // Тот кому назначено
	deadline: Date; // Срок
	type: string; // Тип
	assignedDate: Date; // Дата когда был назначен
	status: string; // Статус
	completed: Date | undefined; // Дата когда сдано
	uploadAccepted: boolean; // Принудительная загрузка
}